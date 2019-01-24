function prefill(n, v) {
    var result;
    if (!isFinite(n) || n % 1 !== 0 || n < 0 || typeof(n) === 'boolean' || isNaN(n)) {
        throw new TypeError(n + ' is invalid');
    } else if (n == 0) {
        result = [];
    } else {
        var prefillArray = new Array(n);
        result = prefillArray.fill(v);
    }
    return result;
}
