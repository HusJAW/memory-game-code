import {
  menuButton,
  windowSize,
  customButtonMediaQuery,
} from "./modules/media-query.js";

import {
  onePlayerGamePlay,
  renderGameCards,
  multiplayerGamePlay,
} from "./modules/game-play.js";

// media query functions
menuButton();
windowSize();
window.addEventListener("resize", windowSize);

customButtonMediaQuery();
window.addEventListener("resize", customButtonMediaQuery);
// media query functions

// arrays to be used in the game
let numArr4x4 = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
let random4x4 = [];
let numArr6x6 = [
  1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
];
let random6x6 = [];

// arrays to be used in the game

//start game form input value global stores
const startGameButton = document.querySelector(".start-game-button");
const gameGridContainer = document.querySelector(".game-grid");
const startGameContainer = document.querySelector(".start-game");

const header = document.querySelector("header");
let body = document.body;

let maxNumberOfMoves, numberOfPlayers, gridSize;

numberOfPlayers = document.querySelector('input[name="players"]:checked');
gridSize = document.querySelector('input[name="grid-size"]:checked');
maxNumberOfMoves = document.querySelector('input[name="moves"]:checked').value;

function grabGameInputs() {
  numberOfPlayers = document.querySelector('input[name="players"]:checked');
  gridSize = document.querySelector('input[name="grid-size"]:checked');
  maxNumberOfMoves = document.querySelector(
    'input[name="moves"]:checked'
  ).value;
  console.log("im running");
}

//start game event-listner

startGameButton.addEventListener("click", grabGameInputs);

// now i need to shuffel the array then apply it to the render game function
renderGameCards(gameArray, randomArray, containerStyle, cardStyle);
