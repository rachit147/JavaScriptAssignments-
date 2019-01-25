function add(arg) {
    let result = function(arg1) {
        return add(arg + arg1);
    };
    result.valueOf = function() {
        return arg;
    };
    return result;
}
