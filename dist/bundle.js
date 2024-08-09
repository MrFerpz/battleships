(()=>{var e={289:e=>{class t{constructor(e,t=0,r=!1){this.length=e,this.hitNo=t,this.isSunk=r,this.coordinates=[]}checkIsSunk(){this.length===this.hitNo&&(this.isSunk=!0)}hit(){this.hitNo++,this.checkIsSunk()}}class r{constructor(){this.board=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],this.ships=[]}placeShip(e,r,o,l="horizontal"){let a=new t(o);if("horizontal"===l)for(let t=0;t<o;t++)this.board[e][r+t]=a,a.coordinates.push([e,r+t]);else if("vertical"===l)for(let t=0;t<o;t++)this.board[e+t][r]=a,a.coordinates.push([e+t,r]);this.ships.push(a)}receiveAttack(e,r){const o=this.board[e][r];0===o?this.board[e][r]="miss":o instanceof t&&(this.board[e][r]="hit",o.hit())}printBoard(){for(let e of this.board){let t=e.map((e=>0===e?"0":"miss"===e?"M":"hit"===e?"H":"S")).join(" ");console.log(t)}}checkAllSunk(){return this.ships.every((e=>e.isSunk))}}class o{constructor(e="person"){this.type=e,this.playerBoard=new r}}e.exports?e.exports={Ship:t,GameBoard:r,Player:o}:(window.Ship=t,window.GameBoard=r,window.Player=o)}},t={};function r(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(289);const t={$docBody:document.querySelector("body"),$boardsContainer:document.querySelector(".boards-container"),$playerBoard:document.querySelector(".player-board"),$computerBoard:document.querySelector(".computer-board"),$playerRow:[],$playerCell:[[],[],[],[],[],[],[],[],[],[]]};let o=new e.Player;new e.Player("computer"),function(){for(let e=0;e<10;e++){let r=document.createElement("div");r.classList.add("player-row"),r.setAttribute("id",`player-row${e}`),t.$playerBoard.appendChild(r),t.$playerRow[e]=document.querySelector(`#player-row${e}`);for(let o=0;o<10;o++){let l=document.createElement("div");l.classList.add("player-cell"),l.setAttribute("id",`player-cell${e}-${o}`),r.appendChild(l),t.$playerCell[e][o]=document.querySelector(`#player-cell${e}-${o}`)}}}(),o.playerBoard.placeShip(3,4,4),o.playerBoard.placeShip(1,2,2),o.playerBoard.placeShip(6,4,3,"vertical"),console.log(o.playerBoard.board),function(){for(let e=0;e<10;e++)for(let r=0;r<10;r++){let l=o.playerBoard.board[e][r],a=t.$playerCell[e][r];0===l?a.setAttribute("style","background-color: white"):"miss"===l?a.setAttribute("style","background-color: red"):"hit"===l?a.setAttribute("style","background-color: green"):a.setAttribute("style","background-color: grey")}}()})()})();