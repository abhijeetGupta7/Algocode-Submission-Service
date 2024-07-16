const { Queue } = require('bullmq');
const redisConnection = require('../config/redisConfig');

const SubmissonQueue=new Queue("SubmissonQueue", { connection: redisConnection });

module.exports=SubmissonQueue;

