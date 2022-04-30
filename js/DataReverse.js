function dataReverse(data) {
    let result = [];
    const BYTE = 8;
    for (let i = 0; i < data.length / BYTE; i++) {
        let byte = data.slice(i * BYTE, (i + 1) * BYTE);
        result = [...byte, ...result];
    }

    return result;
}