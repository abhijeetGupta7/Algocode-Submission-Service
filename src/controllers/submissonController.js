async function pingRequest(req,res) {
    console.log(this.testService);
    const response=await this.testService.pingCheck();   // every controller has access to the fastify object
    return res.send({data:response});
} 

async function createSubmisson(req,res) {
    // TODO: Add validation layer
    const response=await this.submissonService.addSubmisson(req.body);
    return res.code(201).send({
        error:{},
        data:response,
        success:true,
        message: "Create Submisson Successfully"
    });
}


module.exports={
    pingRequest,
    createSubmisson
};