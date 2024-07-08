const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */


async function app(fastify,options) {
   // fastify.register(require('cors'));  // no need as of now, giving error dont know why

    fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});
    fastify.register(servicePlugin);
}

module.exports=fastifyPlugin(app);