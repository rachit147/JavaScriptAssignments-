Object.prototype.hash = function(string) {
    var str = string.split('.'),
        result = this;
    for (var i = 0; i < str.length; i++) {
        if (result) {
            result = result[str[i]];    
        } else {
            break;
        }
    }
    return result;
};
