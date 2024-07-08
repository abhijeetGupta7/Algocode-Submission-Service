const v1Plugin = require("./v1/v1Routes");

async function apiPlugin(fastify,options) {           // this plugin contains all the api routes
    fastify.register(v1Plugin, {prefix: "/v1"});
}

module.exports=apiPlugin;