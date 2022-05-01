function tankvol(h, d, vt) {
    return parseInt(vt * ((d = Math.acos(h = 1 - 2 * h / d)) - Math.sin(d) * h) / Math.PI);
}