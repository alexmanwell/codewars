function getCount(str) {
    let vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {
        if ((/[a,e,i,o,u]/).test(str[i])) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}