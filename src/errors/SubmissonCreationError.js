const BaseError = require("./BaseError");

class SubmissonCreationError extends BaseError {
    constructor() {
        super("Submisson Creation Error",400,"Not able to create the submisson");
    }
}

module.exports=SubmissonCreationError;