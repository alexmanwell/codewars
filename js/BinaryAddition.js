function addBinary(a,b) {
    const sum = a + b;

    return binaryFromDecimal(sum);
}

function binaryFromDecimal(num) {
    let result = '';
    while (num > 0) {
        result = num % 2 + result;
        num = Math.floor(num / 2);
    }

    return result;
}