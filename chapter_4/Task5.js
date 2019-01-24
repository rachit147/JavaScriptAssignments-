function compose() {
    var functionList = arguments;
    return function(arg) {
        for (let index = functionList.length - 1; index >= 0; index--) {
            arg = functionList[index](arg);
        }
        return arg;
    }
}