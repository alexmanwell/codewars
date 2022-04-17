function nbYear(p0, percent, aug, p) {
    let amountYears = 0;
    let increasePopulation = p0;
    while (increasePopulation < p) {
        increasePopulation += increasePopulation * percent / 100 + aug;
        amountYears++;
    }

    return amountYears;
}