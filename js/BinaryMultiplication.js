function binMul(m,n){
    let min = (m < n) ? m : n;
    let max = (m > n) ? m : n;
    let numbers = [];

    while (max / 2 > 0) {
        numbers.push(min * (max % 2 === 1));
        max = parseInt(max / 2);
        min *= 2;
    }
    return numbers.filter((num) => num > 0).reverse();
}