function add(n1, n2) {
    if(!isNumber(n1) || !isNumber(n2)) {
        return "Invalid input";
    }
    return n1 + n2;
}

function subtract(n1, n2) {
    if(!isNumber(n1) || !isNumber(n2)) {
        return "Invalid input";
    }
    return n1 - n2;
}

function multiply(n1, n2) {
    if(!isNumber(n1) || !isNumber(n2)) {
        return "Invalid input";
    }
    return n1 * n2;
}

function divide(n1, n2) {
    if(!isNumber(n1) || !isNumber(n2)) {
        return "Invalid input";
    }
    if(n2 === 0) return "Can't divide by 0";
    return n1 / n2;
}

function isNumber(n) {
    return typeof(n) === 'number';
}

export { add, subtract, multiply, divide };