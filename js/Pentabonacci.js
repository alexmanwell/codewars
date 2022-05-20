function countOddPentaFib(n) {
    let arr = [0,1,1,2,4];
    for (let i = 5; i <= n; i++) {
        arr[i] = parseInt((arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4] + arr[i - 5]).toString().slice(-1));
    }

    let result = arr.filter((item) => {
        return item % 2 !== 0;
    });

    return result.length - 1;
}