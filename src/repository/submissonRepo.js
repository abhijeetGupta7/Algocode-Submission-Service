const Submisson  = require("../models/submissonSchema")

class SubmissonRepository {
    constructor() {
        this.submissonModel=Submisson;
    }

    async createSubmisson(submisson) {
        const response=await this.submissonModel.create(submisson);
        return response;
    }

    // async updateSubmisson(data) {
    //     const response=await this.submissonModel.findByIdAndUpdate(data.submissonId,data.response.status, {new:true});
    //     return response;
    // }

};

module.exports=SubmissonRepository;