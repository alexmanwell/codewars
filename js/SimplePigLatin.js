function pigIt(str){
    let result = str.split(' ');
    for (let i = 0; i < result.length; i++) {
        const firstSymbol = result[i].substring(0, 1);
        const substrWithoutFirstSymbol = result[i].substring(1, str.length);
        const changedWord = substrWithoutFirstSymbol + firstSymbol;
        const resultWord = changedWord.match("[a-zA-Z]") ? changedWord + 'ay' : changedWord;
        result = replaceWord(result, resultWord, i);
    }

    return result.join(' ');
}

function replaceWord(array, word, index) {
    array[index] = word
    return array;
}