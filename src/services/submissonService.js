const fastify = require("fastify");
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
            throw { error:"Not able to create Submisson" };
        }
        console.log(submissonData);
        const response=await submissonQueueProducer(submisson);
        return { queueResponse: response, submisson };
    }

}

module.exports=SubmissonService;
