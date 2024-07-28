class Ship {
    constructor(length, hitNo = 0, isSunk = false) {
        this.length = length;
        this.hitNo = hitNo;
        this.isSunk = isSunk;
    }

    checkIsSunk() {
        if (length === hitNo) {
            isSunk = true;
        }
    }

    hit() {
        this.hitNo++;
        this.checkIsSunk();
    }
}

let ship1 = new Ship(5);

module.exports = Ship;
