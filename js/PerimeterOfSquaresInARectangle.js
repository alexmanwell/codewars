function perimeter(n) {
    let prev = 0;
    let next = 1;
    let result = prev + next;
    for (let i = 0; i < n; i++) {
        let temp = next;
        next = prev + next;
        prev = temp;
        result += next;
    }

    return 4 * result;
}