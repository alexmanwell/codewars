function maskify(cc) {
    const LAST_NUMBERS = 4;
    const delta = cc.length - LAST_NUMBERS;
    return cc.length <= LAST_NUMBERS ? cc : "#".repeat(delta) + cc.substring(delta, cc.length);
}