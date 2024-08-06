const fetchProblemDetails = require('./apis/problemAdminApi');
const app = require('./app');
const connectToDB = require('./config/dbConfig');
const { PORT } = require('./config/serverConfig');

const fastify=require('fastify')({logger:true});  // calling the fastify contructor (fastify provides its own dedicated logger)


fastify.register(app);
fastify.listen({ port:PORT }, async (err)=>{
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server started at ${PORT}`);
    await connectToDB();

    fetchProblemDetails("66b24085afe2b6d2dc966952")
});
