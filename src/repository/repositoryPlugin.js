const fastifyPlugin = require("fastify-plugin");
const SubmissonRepository = require("./submissonRepo");

async function repositoryPlugin(fastify,options) {
    fastify.decorate("submissonRepository",new SubmissonRepository());
}

module.exports=fastifyPlugin(repositoryPlugin);