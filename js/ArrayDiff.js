function arrayDiff(a, b) {
    return a.filter((elem) => {
        return !b.includes(elem);
    });
}