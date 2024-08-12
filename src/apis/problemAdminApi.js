const axiosInstance = require("../config/axiosInstance");
const { PROBLEM_ADMIN_SERVICE_URL } = require("../config/serverConfig");

const PROBLEM_ADMIN_URL_API=`${PROBLEM_ADMIN_SERVICE_URL}/api/v1/problems`

async function fetchProblemDetails(id) {
    try {
        const uri=`${PROBLEM_ADMIN_URL_API}/${id}`;
        const response=await axiosInstance.get(uri);
       // console.log(`API response ${response}`);
        return response.data;
    } catch (error) {
        console.log("Error in fetching the problem details ",error);
    }   
}



module.exports=fetchProblemDetails;

