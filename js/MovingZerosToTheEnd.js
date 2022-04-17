var moveZeros = function (arr) {
    let result = [];
    let resultZero = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        } else {
            resultZero.push(arr[i]);
        }
    }

    for (let i = 0; i < resultZero.length; i++) {
        result.push(resultZero[i]);
    }

    return result;
}