const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT || 3000 ,    
    REDIS_HOST:process.env.REDIS_HOST || "127.0.0.1",
    REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379", 10),
    ATLAS_DB_URL:process.env.ATLAS_DB_URL,
    NODE_ENV:process.env.NODE_ENV,
    PROBLEM_ADMIN_SERVICE_URL:process.env.PROBLEM_ADMIN_SERVICE_URL,
    ALGOCODE_SOCKET_SERVICE_URL:process.env.ALGOCODE_SOCKET_SERVICE_URL
}