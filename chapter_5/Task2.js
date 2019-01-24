Object.prototype.hash = function(string) {
    var str = string.split('.'),
        result = this;
    while (str.length != 0 && result !== undefined) {
        result = result[str.shift()];
    }
    return result;
};