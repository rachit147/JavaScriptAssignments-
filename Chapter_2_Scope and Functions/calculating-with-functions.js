function zero(func) {
    return getResult(func, 0);
}

function one(func) {
    return getResult(func, 1);
}

function two(func) {
    return getResult(func, 2);
}

function three(func) {
    return getResult(func, 3);
}

function four(func) {
    return getResult(func, 4);
}

function five(func) {
    return getResult(func, 5);
}

function six(func) {
    return getResult(func, 6);
}

function seven(func) {
    return getResult(func, 7);
}

function eight(func) {
    return getResult(func, 8);
}

function nine(func) {
    return getResult(func, 9);
}

function getResult(func, num) {
    let result;
    if (func) {
        result = func(num);
    } else {
        result = num;
    }
    return result;
}

function plus(num2) {
    return function(num1) {
        return num1 + num2;
    }
}

function minus(num2) {
    return function(num1) {
        return num1 - num2;
    }
}

function times(num2) {
    return function(num1) {
        return num1 * num2;
    }
}

function dividedBy(num2) {
    return function(num1) {
       return Math.floor(num1 / num2);
    }
}
