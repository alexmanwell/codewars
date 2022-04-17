function partlist(arr) {
    let partsOfList = new Map();
    for (let i = 0; i < arr.length - 1; i++) {
        partsOfList.set(arr.slice(0, i + 1), arr.slice(i + 1, arr.length));
    }

    return mapToArray(partsOfList);
}

function mapToArray(map) {
    let list = [];
    for (let key of map.keys()) {
        list.push([key.join(" "), map.get(key).join(" ")]);
    }

    return list;
}