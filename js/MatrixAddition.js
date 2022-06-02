function matrixAddition(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let line = [];
        for (let j = 0; j < a[i].length; j++) {
            line.push(a[i][j] + b[i][j]);
        }
        result.push(line);
    }

    return result;
}

// Best solution:
function matrixAddition(a, b){
    return a.map(function(n, i){
        return n.map(function(o, j){
            return o + b[i][j];
        });
    });
}