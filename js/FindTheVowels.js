const isVowel = (c) => {
    return ['a', 'e', 'i', 'u', 'y', 'o'].indexOf(c.toLowerCase()) !== -1;
}

function vowelIndices(word){
    return word.split("").reduce((args, c, index) => {
        return isVowel(c) ? [...args, index + 1] : [...args];
    }, []);
}