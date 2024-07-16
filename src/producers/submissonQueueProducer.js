const SubmissonQueue = require("../queues/submissonQueue");

async function submissonQueueProducer(submissonPayload) {
    await SubmissonQueue.add("SubmissonJob",submissonPayload);
    console.log("Submisson added in Submisson queue successfully");
}

module.exports=submissonQueueProducer;