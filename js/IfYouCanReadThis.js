const PUNCTUATION = ",.!?";

function to_nato(words) {
    let encription = "";
    words = words.toLowerCase();
    for (let i = 0; i < words.length; i++) {
        let c = words.charAt(i);
        if (c != ' ') {
            encription += (PUNCTUATION.includes(c)) ? c + " " : NATO[c] + " ";
        }
    }

    return encription.trim();
}