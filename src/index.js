import { Ship, GameBoard, Player } from './battleships.js';

// set-up DOM references
const DOM = {
    $docBody : document.querySelector("body"),
    $boardsContainer : document.querySelector(".boards-container"),
    $playerBoard : document.querySelector(".player-board"),
    $computerBoard : document.querySelector(".computer-board"),
    $playerRow : [],
    $playerCell : [[],[],[],[],[],[],[],[],[],[]],
}

// make two players
let playerOne = new Player();
let CPU = new Player("computer");

function initialiseDOM() {
// populate DOM with divs in a grid
    for (let i = 0; i < 10; i++) {

        // makes a row and gives it name
        let row = document.createElement("div");
        row.classList.add(`player-row`);
        row.setAttribute("id", `player-row${i}`);

        // add row to player's board div
        DOM.$playerBoard.appendChild(row);

        // add to DOM array so we have a reference
        DOM.$playerRow[i] = document.querySelector(`#player-row${i}`);

        // then 10 times for each row, make cells
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement("div");
            cell.classList.add("player-cell");
            cell.setAttribute("id", `player-cell${i}-${j}`);
            row.appendChild(cell);

            // add to DOM array so we have a reference
            DOM.$playerCell[i][j] = document.querySelector(`#player-cell${i}-${j}`);
        }
    }
}

initialiseDOM();

playerOne.playerBoard.placeShip(3, 4, 4);
playerOne.playerBoard.placeShip(1, 2, 2);
playerOne.playerBoard.placeShip(6, 4, 3, "vertical");

// playerOne.playerBoard.printBoard();
// console.log(playerOne.playerBoard);
console.log(playerOne.playerBoard.board)

function updatePlayerDOM() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = playerOne.playerBoard.board[i][j];
            let cellElement = DOM.$playerCell[i][j];

            if (cell === 0) {
                cellElement.setAttribute("style", "background-color: white");
            } else if (cell === "miss") {
                cellElement.setAttribute("style", "background-color: red");
            } else if (cell === "hit") {
                cellElement.setAttribute("style", "background-color: green");
            } else {
                cellElement.setAttribute("style", "background-color: grey")
            }
        }
    }
}

updatePlayerDOM();
