function spinWords(sentence){
    const WORD_LENGTH = 5;
    const words = sentence.split(' ');
    let tempWords = [];
    for (let i = 0; i < words.length; i++ ) {
        tempWords[i] = (words[i].length >= WORD_LENGTH) ? reverse(words[i]) : words[i];
    }

    return tempWords.join(' ');
}

function reverse(str) {
    return str.split("").reverse().join("");
}