const updateSubmissonStatus = require("../apis/updateSubmissonStatusApi");
const axiosInstance = require("../config/axiosInstance");
const { ALGOCODE_SOCKET_SERVICE_URL } = require("../config/serverConfig");

module.exports=class EvaluationJob {
    name;
    payload;
    constructor(payload) {
        this.name=this.constructor.name;
        this.payload=payload;
    }

    handle = async (job=undefined) => {
        console.log("Handler of Job");
        if(job) {
            console.log("DATA JOB",job.data);
            const updatedSubmisson=await updateSubmissonStatus(job.data);
            console.log(updatedSubmisson);
          //  const sendPayloadURI=`${ALGOCODE_SOCKET_SERVICE_URL}/sendPayload`;
    
            try {
                const response=await axiosInstance.post(`http://localhost:8050/sendPayload`,{
                    userId:job.data.userId,
                    payload:{ 
                        userId:job.data.userId,
                        response:job.data.response,
                        submissonId:job.data.submissonId
                    }
                });            
                console.log(response);    
            } catch (error) {
                console.log("AXIOS ERROR ",error);
            }

        }
    };

    failed = async (job=undefined) => {
        console.log("Job failed");
        if(job) {
            console.log(job.id);
        }
    };
}