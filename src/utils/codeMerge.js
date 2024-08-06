function mergeCode(userCode,codeStubs) {
    return codeStubs.startCode+ "\n\n"+ codeStubs.userCode + "\n" + userCode + "\n\n"+ codeStubs.endCode;
}

module.exports=mergeCode;