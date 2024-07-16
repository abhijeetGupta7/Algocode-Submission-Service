const submissonController = require("../../../controllers/submissonController");

// fastify has built in support for plugins, i.e. a plugin can be a set of routes, so no need to wrap explicitly a route function, here testRoutes inside the "fastifyPlugin"
async function submissionRoutes(fastify,options) {  
    fastify.post("/",submissonController.createSubmisson);
}


module.exports={
    submissionRoutes
}

