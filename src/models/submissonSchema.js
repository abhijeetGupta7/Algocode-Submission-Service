const mongoose=require('mongoose');

const submissonSchema= new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "User Id for the submisson is missing"]
    },
    problemId: {
        type: String,
        required: [true, "Problem id for the submisson is missing"]
    },
    code: {
        type: String,
        required: [true, "Code for the submisson is missing"]
    },
    language: {
        type: String,
        required: [true, "Language for the submisson is missing"]
    },
    status: {
        type: String,
        enum: [ "Pending", "Success", "RE", "TLE", "MLE", "WA" ],
        default: "Pending"
    }
});

const Submisson=mongoose.model("Submisson", submissonSchema);

module.exports=Submisson;
