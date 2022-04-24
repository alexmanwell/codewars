function printerError(s) {
    const count = s.split('').map(letter => letter.match(/[^a-m]/)).join("").length;

    return count + "/" + s.length;
}