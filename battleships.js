class Ship {
    constructor(length, hitNo = 0, isSunk = false) {
        this.length = length;
        this.hitNo = hitNo;
        this.isSunk = isSunk;
        this.coordinates = [];
    }

    // function to see if ship is still alive
    checkIsSunk() {
        if (this.length === this.hitNo) {
            this.isSunk = true;
        }
    }

    // function to declare a hit on the ship
    hit() {
        this.hitNo++;
        this.checkIsSunk();
    }
}

class gameBoard {
    constructor() {
        // set-up empty board when it's new
        this.board = 
        [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    }

    // placing ship requires co-ordinates, length, and direction
    // y is first because that's how the array sees the rows
    placeShip(y, x, length, direction = "horizontal") {

        let ship = new Ship(length);

        if (direction === "horizontal") {
            for (let i = 0; i < length; i++) {
                this.board[y][x + i] = 1;
                ship.coordinates.push([y][x + i]);
            }
        }

        else if (direction === "vertical") {
            for (let i = 0; i < length; i++) {
                this.board[y + i][x] = 1;
                ship.coordinates.push([y + i][x]);
            }
        }
    }
}

module.exports = {Ship, gameBoard};
