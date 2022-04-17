function removeZeros(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (hasZero(array[i])) {
            const temp = array[i];
            array[i] = array[i + 1];

            for (let j = i + 1; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array[array.length - 1] = temp;

            i--;
        }

        let isNextZero = false;
        for (let j = i + 1; j < array.length; j++) {
            isNextZero = (array[j] == 0) ? true : false;

            if (!isNextZero) {
                break;
            }
        }

        if (isNextZero) {
            break;
        }
    }

    return array;
}

function hasZero(elem) {
    return elem == 0;
}