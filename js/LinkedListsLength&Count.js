function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let count = 0;
    while(head) {
        count++;
        head = head.next;
    }

    return count;
}

function count(head, data) {
    if (head === null) {
        return 0;
    }

    let counter = 0;
    while (head) {
        if (head.data === data) {
            counter++;
        }
        head = head.next;
    }

    return counter;
}