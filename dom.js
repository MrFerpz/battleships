const { Ship, GameBoard, Player } = require('./battleships');

const DOM = {
    $docBody : document.querySelector("body"),
    $boardsContainer : document.querySelector(".boards-container"),
    $playerBoard : document.querySelector(".player-board"),
    $computerBoard : document.querySelector(".computer-board")
}

let playerOne = new Player();
let CPU = new Player("computer");

