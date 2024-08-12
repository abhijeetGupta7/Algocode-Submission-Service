const submissonModel=require("../models/submissonSchema");

async function updateSubmissonStatus(data) {
    const response=await submissonModel.findByIdAndUpdate(data.submissonId,
    {
        status: data.response.status, 
    },
        { new:true }
    );

    console.log("Submisson status successfully updated");
    return response;
}

module.exports=updateSubmissonStatus;
