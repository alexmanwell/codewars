function towerBuilder(floors) {
    let tower = [];
    let spaces = 0;
    floors = 2 * floors - 1;
    while (floors > 0) {
        tower.unshift(" ".repeat(spaces) + "*".repeat(floors) + " ".repeat(spaces));
        spaces++;
        floors -= 2;
    }

    return tower;
}

//Best solution:
function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2)+ 1)
            + " ".repeat(nFloors - i - 1));
    }
    return tower;
}

//next best solution:
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
        const spaces = ' '.repeat(n - k - 1);
        return spaces + '*'.repeat(k + k + 1) + spaces;
    });
}