const app = require('./app');

const fastify=require('fastify')({logger:true});  // calling the fastify contructor (fastify provides its own dedicated logger)

const PORT=3000;

fastify.register(app);
fastify.listen({ port:PORT }, (err)=>{
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server started at ${PORT}`);
})
