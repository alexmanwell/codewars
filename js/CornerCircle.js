function cornerCircle(r) {
    const smallRadius = (Math.sqrt(2) - 1) / (Math.sqrt(2) + 1) * r;
    return Math.round(smallRadius * 100) / 100;
}