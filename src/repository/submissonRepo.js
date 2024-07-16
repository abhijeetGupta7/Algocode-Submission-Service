const Submisson  = require("../models/submissonSchema")

class SubmissonRepository {
    constructor() {
        this.submissonModel=Submisson;
    }

    async createSubmisson(submisson) {
        const response=await this.submissonModel.create(submisson);
        return response;
    }

};

module.exports=SubmissonRepository;