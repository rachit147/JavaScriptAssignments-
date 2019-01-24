function add(arg) {
    let result = function(y) {
        return add(arg + arg1);
    };
    result.valueOf = function() {
        return arg;
    };
    return result;
}