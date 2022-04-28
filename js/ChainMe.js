function chain(input, fs) {
    return fs.reduce((input, fs) => {
        return fs(input);
    }, input);
}