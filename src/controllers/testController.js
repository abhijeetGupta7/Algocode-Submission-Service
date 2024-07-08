async function pingRequest(req,res) {
    console.log(this.testService);
    const response=await this.testService.pingCheck();   // every controller has access to the fastify object
    return res.send({data:response});
}

module.exports={
    pingRequest
};