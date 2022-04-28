function scramble(str1, str2) {
    let characters = {};

    for (let c of str1) {
        if (characters[c] !== undefined) {
            characters[c]++;
        } else {
            characters[c] = 1;
        }
    }

    for (let c of str2) {
        if (characters[c] === 0 || characters[c] === undefined) {
            return false;
        } else {
            characters[c]--;
        }
    }

    return true;
}