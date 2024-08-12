const { Worker } = require("bullmq"); 
const EvaluationJob = require("../jobs/EvaluationJob");
const redisConnection = require("../config/redisConfig");

module.exports=async function EvaluationWorker(queueName) {
    new Worker(queueName, (job=undefined) => {
        console.log("Evaluation Worker kicked successfully");
        if(job) {
            if(job.name==="EvaluationJob") {
                const EvaluationJobInstance=new EvaluationJob(job.data);
                EvaluationJobInstance.handle(job);
            }
        }
    },
    {connection:redisConnection}
 );
}