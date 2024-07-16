const { submissionRoutes } = require("./submissonRoutes");

submissionRoutes
async function v1Plugin(fastify,options) {
    fastify.register(submissionRoutes, {prefix: "/submisson"});
} 

module.exports=v1Plugin;