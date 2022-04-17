function permutations(string) {
    if (string.length == 1) {
        return string.split('').sort();
    }

    let characters = string.split('');
    let results = new Set();

    const size = characters.length;
    const countPermutations = factorial(size);
    for (let i = 0; i < countPermutations; i++) {
        for (let j = i; j < countPermutations; j++) {
            results.add(swap(characters, adjust(i % size, size), adjust(j % size, size)).join(''));
        }
    }

    return [...results].sort();
}

function adjust(index, size) {
    return index >= size ? index - size : index;
}

function factorial(num) {
    let result = 1;
    for (let i = 0; i < num; i++) {
        result *= (i + 1);
    }

    return result;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    return array;
}