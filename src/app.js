const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");
const repositoryPlugin = require("./repository/repositoryPlugin");

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */


async function app(fastify,options) {
   // fastify.register(require('cors'));  // no need as of now, giving error dont know why

    await fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});
    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);
}

module.exports=fastifyPlugin(app);