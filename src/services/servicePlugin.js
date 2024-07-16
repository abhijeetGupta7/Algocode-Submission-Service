const SubmissonService = require("./submissonService");
const fastifyPlugin=require('fastify-plugin');

async function servicePlugin(fastify,options) {
    fastify.decorate("submissonService",new SubmissonService(this.submissonRepository));  // we can decorate the testService class like this key value pair and thus we can access this using fastify object and that fastify object can be easily accessed by any controller as every controller has access to the fastify object
}

module.exports=fastifyPlugin(servicePlugin);