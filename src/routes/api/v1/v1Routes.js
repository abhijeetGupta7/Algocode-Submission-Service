const testRoutes = require("./testRoutes");

async function v1Plugin(fastify,options) {
    fastify.register(testRoutes, {prefix: "/test"});
} 

module.exports=v1Plugin;