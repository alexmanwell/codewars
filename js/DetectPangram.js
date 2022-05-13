const AMOUNT_LATIN_LETTERS = 26;

function isPangram(string) {

    let characters = new Set();
    string.toLowerCase().split("").forEach((c) => {
        if ((/[a-z]/).test(c)) {
            characters.add(c);
        }
    });

    return characters.size === AMOUNT_LATIN_LETTERS;
}