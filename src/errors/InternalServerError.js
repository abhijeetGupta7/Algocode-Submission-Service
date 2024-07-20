const BaseError = require("./BaseError");

class InternalServerError extends BaseError {
    constructor() {
        super("Internal Server Error",500,"Something went wrong !");
    }
}

module.exports=InternalServerError;

