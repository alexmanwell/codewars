function solution(number){
    let numbers = [];
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numbers.push(i);
        }
    }

    return numbers.reduce((sum, el) => sum + el, 0);
}