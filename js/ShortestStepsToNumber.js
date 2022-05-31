function shortestStepsToNum(num) {
    let count = 0;
    while (num !== 1) {
        num = (num % 2 === 0) ? num / 2 : num - 1;
        count++;
    }

    return count;
}