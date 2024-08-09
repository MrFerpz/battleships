import { Ship, GameBoard, Player } from './battleships.js';

const DOM = {
    $docBody : document.querySelector("body"),
    $boardsContainer : document.querySelector(".boards-container"),
    $playerBoard : document.querySelector(".player-board"),
    $computerBoard : document.querySelector(".computer-board")
}

let playerOne = new Player();
let CPU = new Player("computer");

for (let i = 0; i < playerOne.playerBoard.board.length; i++) {
    let row = document.createElement("div");
    row.classList.add(`player-row`);
    row.setAttribute("id", `player-row${i}`);
    DOM.$playerBoard.appendChild(row);
    for (let j = 0; j < playerOne.playerBoard.board[0].length; j++) {
        let cell = document.createElement("div");
        cell.classList.add("player-cell");
        cell.setAttribute("id", `player-cell${i}-${j}`);
        row.appendChild(cell);
    }
}
