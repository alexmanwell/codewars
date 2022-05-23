function compare(a, b) {
    if (a === null && b === null) {
        return true;
    }
    if (a === null || b === null) {
        return false;
    }
    if (a.val !== b.val) {
        return false;
    }

    const checkInLeft = (a1, b1) => {
        if (a1 === null || b1 === null) {
            return !((a1 && !b1) || (!a1 && b1));
        }
        if (a1.val !== b1.val) {
            return false;
        }
        return checkInLeft(a1.left, b1.left);
    };

    const checkInRight = (a1, b1) => {
        if (a1 === null || b1 === null) {
            return !((a1 && !b1) || (!a1 && b1));
        }
        if (a1.val !== b1.val) {
            return false;
        }
        return checkInRight(a1.right, b1.right);
    };

    return checkInLeft(a.left, b.left) && checkInRight(a.right, b.right);
}