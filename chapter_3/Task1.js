function prefill(n, v) {

    if (n === Infinity || n === -Infinity || n % 1 !== 0 || n < 0 || n === true || n === false || isNaN(n)) {
        throw new TypeError(n + ' is invalid');
    } else if (n == 0) {
        return [];
    } else {

        var arr = new Array(n);
        arr.fill(v);
        return arr;
    }
}