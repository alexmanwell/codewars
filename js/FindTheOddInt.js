function findOdd(A) {
    let results = new Map();
    for (let i = 0; i < A.length; i++) {
        let value = results.get(A[i]);
        (value != undefined) ? results.set(A[i], value + 1) : results.set(A[i], 1);
    }

    return getOddValue(results);
}

function getOddValue(values) {
    let result;
    for (let [key, value] of values) {
        if (!isEven(value)) {
            result = key;
        }
    }

    return result
}

function isEven(value) {
    return value % 2 == 0
} 