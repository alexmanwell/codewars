function reduce(head, f, init) {
    return (head === null) ? init : reduce(head.next, f, f(init, head.data));
}