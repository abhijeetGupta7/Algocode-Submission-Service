const fetchProblemDetails = require("../apis/problemAdminApi");
const InternalServerError = require("../errors/InternalServerError");
const SubmissonCreationError = require("../errors/SubmissonCreationError");
const submissonQueueProducer = require("../producers/submissonQueueProducer");
const mergeCode = require("../utils/codeMerge");

class SubmissonService {
    constructor(submissonRepository) {
        this.submissonRepository=submissonRepository;
    }

    async pingCheck() {
        return "ping pong";
    }

    async addSubmisson(submisson) {    // adds submisson in db and if added in db, then add in Submisson queue
        // hit the problemAdminApi and fetch the problem details
        const problemId=submisson.problemId;
        const codeLanguage=submisson.language;
        const userCode=submisson.code;
        const userId=submisson.userId;
        
        const problemDetails=await fetchProblemDetails(problemId);
        if(!problemDetails) {
            console.log("Failed to create Submisson");
            throw new InternalServerError();
        }
        
        // merge the userCode and langCodeStub based on the langauge
        const langCodeStubs=await problemDetails.data.codeStubs.find(stubs => stubs.language.toLowerCase()===codeLanguage.toLowerCase());
        const codeToBeSubmitted=mergeCode(userCode,langCodeStubs);
        console.log(codeToBeSubmitted);
        
        submisson.code=codeToBeSubmitted;  // so that complete code gets in the db and in the SubmissonQueue
        const submissonData=await this.submissonRepository.createSubmisson(submisson); 
        if(!submissonData) {
            // Add error handling
            throw new SubmissonCreationError();
        }
        console.log(submissonData);
       
        const submissonQueuePayload= { [submissonData._id]:{  // here we had [submissonData_.id]
            language:"java",
            code:codeToBeSubmitted,
            inputTestCase:problemDetails.data.testcases[0].input,
            outputTestCase:problemDetails.data.testcases[0].output,
            submissonId:submissonData._id,
            userId
          }
        }
       
        await submissonQueueProducer(submissonQueuePayload);
        return { queueResponse: submissonData };
    }


    // async updateSubmisson(data) {
    //     const updatedSubmisson = await this.submissonRepository.updateSubmisson(data);
    //     return updatedSubmisson;
    // }
}

module.exports=SubmissonService;
