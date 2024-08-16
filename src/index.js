import { Ship, GameBoard, Player } from './battleships.js';

// set-up DOM references
const DOM = {
    $docBody : document.querySelector("body"),
    $boardsContainer : document.querySelector(".boards-container"),
    $playerBoard : document.querySelector(".player-board"),
    $computerBoard : document.querySelector(".computer-board"),
    $playerRow : [],
    $playerCellArray : [[],[],[],[],[],[],[],[],[],[]],
    $compRow : [],
    $compCellArray : [[],[],[],[],[],[],[],[],[],[]]
}

// make two players
let playerOne = new Player();
let CPU = new Player("computer");

function initialiseDOM() {
// populate DOM with divs in a grid
    for (let i = 0; i < 10; i++) {

        // makes rows and gives them names
        let row = document.createElement("div");
        let comprow = document.createElement("div");

        // give them classes
        row.classList.add(`player-row`);
        comprow.classList.add(`comp-row`);

        // give them ids
        row.setAttribute("id", `player-row${i}`);
        comprow.setAttribute("id", `comp-row${i}`);

        // add row to player's board div
        DOM.$playerBoard.appendChild(row);
        DOM.$computerBoard.appendChild(comprow);

        // add to DOM arrays so we have a reference
        DOM.$playerRow[i] = document.querySelector(`#player-row${i}`);
        DOM.$compRow[i] = document.querySelector(`#comp-row${i}`);

        // then 10 times for each row, make cells
        for (let j = 0; j < 10; j++) {
            let playerCell = document.createElement("div");
            let compCell = document.createElement("div");

            // add classes
            playerCell.classList.add("player-cell");
            compCell.classList.add("comp-cell");

            // add IDs
            playerCell.setAttribute("id", `player-cell${i}-${j}`);
            compCell.setAttribute("id", `comp-cell${i}-${j}`);

            // add to the rows
            row.appendChild(playerCell);
            comprow.appendChild(compCell);

            // add to DOM arrays so we have references to them
            DOM.$playerCellArray[i][j] = document.querySelector(`#player-cell${i}-${j}`);
            DOM.$compCellArray[i][j] = document.querySelector(`#comp-cell${i}-${j}`)
        }
    }
}

initialiseDOM();

playerOne.playerBoard.placeShip(3, 4, 4);
playerOne.playerBoard.placeShip(1, 2, 2);
playerOne.playerBoard.placeShip(6, 4, 3, "vertical");

CPU.playerBoard.placeShip(4,4,3);
CPU.playerBoard.placeShip(1,1,4, "vertical");
CPU.playerBoard.placeShip(6,6,2);

// playerOne.playerBoard.printBoard();
// console.log(playerOne.playerBoard);
console.log(playerOne.playerBoard.board)
console.log(CPU.playerBoard.board);

function updatePlayerDOM() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            // first for the players
            let playerCell = playerOne.playerBoard.board[i][j];
            let playerCellDOM = DOM.$playerCellArray[i][j];

            // then the CPU
            let compCell = CPU.playerBoard.board[i][j];
            let compCellDOM = DOM.$compCellArray[i][j];

            if (playerCell === 0) {
                playerCellDOM.setAttribute("style", "background-color: white");
            } else if (playerCell === "miss") {
                playerCellDOM.setAttribute("style", "background-color: red");
            } else if (playerCell === "hit") {
                playerCellDOM.setAttribute("style", "background-color: green");
            } else {
                playerCellDOM.setAttribute("style", "background-color: grey")
            }

            if (compCell === 0) {
                compCellDOM.setAttribute("style", "background-color: white");
            } else if (compCell === "miss") {
                compCellDOM.setAttribute("style", "background-color: red");
            } else if (compCell === "hit") {
                compCellDOM.setAttribute("style", "background-color: green");

            // commented out the grey ships as they should be hidden
            // } else {
            //     compCellDOM.setAttribute("style", "background-color: grey")
            }
        }
    }
}

updatePlayerDOM();
