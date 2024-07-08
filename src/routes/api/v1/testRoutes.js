const testController = require("../../../controllers/testController");

// fastify has built in support for plugins, i.e. a plugin can be a set of routes, so no need to wrap explicitly a route function, here testRoutes inside the "fastifyPlugin"
async function testRoutes(fastify,options) {  
    fastify.get("/ping",testController.pingRequest);
}

module.exports=testRoutes;

