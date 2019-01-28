Object.prototype.hash = function(string) {
    var str = string.split('.'),
        result = this;
    for (var i = 0; i < str.length; i++) {
        if (result) {
            console.log(result);
            result = result[str[i]];
            console.log(result);
        } else {
            break;
        }
    }
    return result;
};
