function squareDigits(num){
    let result = '';
    while (num > 0) {
        result = Math.pow(num % 10, 2) + result;
        num = Math.floor(num / 10);
    }

    return Number(result);
}