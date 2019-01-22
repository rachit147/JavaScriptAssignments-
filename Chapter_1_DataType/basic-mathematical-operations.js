function basicOp(operation, value1, value2) {
    var finalValue = 0;
    if (operation === '+') {
        finalValue = value1 + value2;
    } else if (operation === '-') {
        finalValue = value1 - value2;
    } else if (operation === '*') {
        finalValue = value1 * value2;
    } else if (operation === '/') {
        finalValue = value1 / value2;
    } else {
        return 'only +,-,*,/ operators are allowed';
    }

    return finalValue;
}
