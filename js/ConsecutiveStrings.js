function longestConsec(strarr, k) {
    const list = strarr.map((value, index) => strarr.slice(index, index + k).join(''));
    const maxLength = (list) => { return list.reduce((max = "", el) => (max.length < el.length) ? el : max); }
    return (k < 1 || k > strarr.length) ? "" : maxLength(list);
}