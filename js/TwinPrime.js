const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return n > 1;
};

function isTwinPrime(n) {
    if (!isPrime(n)) {
        return false;
    }

    return isPrime(n - 2) || isPrime(n + 2);
}