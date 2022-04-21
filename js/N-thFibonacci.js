function nthFibo(n) {
    let [prev, curr] = [0, 1];
    let fibo = 0;
    let count = 2;
    while (count < n) {
        count++;
        fibo = prev + curr;
        prev = curr;
        curr = fibo;
    }
    return (n === 1) ? 0 : (n === 2) ? 1 : fibo;
}