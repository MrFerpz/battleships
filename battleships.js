class Ship {
    constructor(length, hitNo = 0, isSunk = false) {
        this.length = length;
        this.hitNo = hitNo;
        this.isSunk = isSunk;
    }

    isSunk() {
        if (length === hitNo) {
            isSunk = true;
        }
    }
}

module.exports = Ship;
