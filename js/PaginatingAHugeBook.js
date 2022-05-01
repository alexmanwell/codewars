function pageDigits(pages) {
    let length = BigInt(pages.toString().length);
    let result = 0n;
    while (length !== 0n) {
        let deltaPages = pages - (BigInt(Math.pow(10, parseInt(length - 1n))) - 1n);
        result += BigInt(deltaPages * length);
        pages -= deltaPages;
        length--;
    }

    return result;
}