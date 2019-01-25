function prefill(n, v) {
    var result = [];
    if (n >= 0 && n % 1 === 0 && (typeof(n) === 'number' || typeof(n) === 'string')) {
        var prefillArray = new Array(Number(n));
        result = prefillArray.fill(v);
    } else {
        throw new TypeError(n + ' is invalid');
    }
    return result;
}
