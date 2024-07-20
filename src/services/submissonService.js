const SubmissonCreationError = require("../errors/SubmissonCreationError");
const submissonQueueProducer = require("../producers/submissonQueueProducer");

class SubmissonService {
    constructor(submissonRepository) {
        this.submissonRepository=submissonRepository;
    }

    async pingCheck() {
        return "ping pong";
    }

    async addSubmisson(submisson) {    // adds submisson in db and if added in db, then add in Submisson queue
        const submissonData=await this.submissonRepository.createSubmisson(submisson); 
        if(!submissonData) {
            // Add error handling
            throw new SubmissonCreationError();
        }
        console.log(submissonData);
        await submissonQueueProducer(submisson);
        return { queueResponse: submissonData };
    }

}

module.exports=SubmissonService;
