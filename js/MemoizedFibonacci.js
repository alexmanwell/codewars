const memoize = (fn) => {
    let cache = [];
    return (value) => {
        let n = value;
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
};

var fibonacci = memoize((n) => {
    if (n === 0 || n === 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
});