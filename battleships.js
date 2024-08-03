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

class GameBoard {
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this.ships = [];
    }

    // placing ship requires co-ordinates, length, and direction
    // y is first because that's how the array sees the rows
    placeShip(y, x, length, direction = "horizontal") {

        let ship = new Ship(length);

        if (direction === "horizontal") {
            for (let i = 0; i < length; i++) {
                this.board[y][x + i] = ship;
                ship.coordinates.push([y, x + i]);
            }
        } else if (direction === "vertical") {
            for (let i = 0; i < length; i++) {
                this.board[y + i][x] = ship;
                ship.coordinates.push([y + i, x]);
            }
        }

        this.ships.push(ship);
    }

    receiveAttack(y, x) {

        const cell = this.board[y][x];

        if (cell === 0) {
            this.board[y][x] = "miss";
        } else if (cell instanceof Ship) {
            this.board[y][x] = "hit";
            cell.hit();
        }
    }

    printBoard() {
        for (let row of this.board) {
            let rowString = row.map(cell => {
                if (cell === 0) return '0';
                if (cell === "miss") return 'M';
                if (cell === "hit") return 'H';
                return 'S';  // Representing ship with 'S'
            }).join(' ');
            console.log(rowString);
        }
    }

    checkAllSunk() {
        return this.ships.every(ship => ship.isSunk);
    }
}

let gameBoard = new GameBoard();
gameBoard.placeShip(3, 4, 5);
console.log(gameBoard.ships);


module.exports = { Ship, GameBoard };
