function prefill(n, v) {
    var result;
    if (n === Infinity || n === -Infinity || n % 1 !== 0 || n < 0 || n === true || n === false || isNaN(n)) {
        throw new TypeError(n + ' is invalid');
    } else if (n == 0) {
        result = [];
    } else {
        var prefillArray = new Array(n);
        result = prefillArray.fill(v);
    }
    return result;
}
