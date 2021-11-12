import {
  menuButton,
  windowSize,
  customButtonMediaQuery,
} from "./modules/media-query.js";
import {
  removeChildren,
  shuffleArray,
} from "./modules/array-manipulation-functions.js";
import { countUpTimer } from "./modules/timer.js";
import {
  onePlayerGamePlay,
  renderGameCards,
  multiplayerGamePlay,
} from "./modules/game-play.js";

menuButton();
windowSize();
window.addEventListener("resize", windowSize);

customButtonMediaQuery();
window.addEventListener("resize", customButtonMediaQuery);

let numArr4x4 = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
let random4x4 = [];
let numArr6x6 = [
  1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
];
let random6x6 = [];

// countUpTimer();

const startGameButton = document.querySelector(".start-game-button");
const gameGridContainer = document.querySelector(".game-grid");
const startGameContainer = document.querySelector(".start-game");

let maxNumberOfMoves;

let numberOfPlayers;
let gridSize;
const header = document.querySelector("header");
let body = document.body;

startGameButton.addEventListener("click", (e) => {
  numberOfPlayers = document.querySelector('input[name="players"]:checked');
  gridSize = document.querySelector('input[name="grid-size"]:checked');
  maxNumberOfMoves = document.querySelector(
    'input[name="moves"]:checked'
  ).value;

  startGameContainer.classList.add("hide");

  body.classList.add("light");
  header.classList.remove("hide");

  if (numArr4x4.length == gridSize.value) {
    // refactoring note this can be moved outside of if statments

    renderGameCards(
      numArr4x4,
      random4x4,
      "four-by-four-container",
      "four-by-four-button"
    );
  }

  if (numArr6x6.length == gridSize.value) {
    renderGameCards(
      numArr6x6,
      random6x6,
      "six-by-six-container",
      "six-by-six-button"
    );
  }

  if (numberOfPlayers.value == 1) {
    countUpTimer();
    onePlayerGamePlay(parseInt(gridSize.value));
  }

  if (numberOfPlayers.value >= 2) {
    const infoContainerMulti = document.querySelector(
      ".info-container-multiplayer"
    );
    infoContainerMulti.classList.remove("hide");

    // this can be its own function
    const playerButtons = document.querySelectorAll(".custom-button");

    for (let i = 0; i < parseInt(numberOfPlayers.value); i++) {
      playerButtons[i].classList.remove("inactive");
    }
    // this can be its own function

    multiplayerGamePlay(numberOfPlayers.value, parseInt(gridSize.value));
  }
});

function restMultiPlayerCustomButton() {
  let player1DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(1) p:nth-of-type(2)"
  );
  let player2DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(2) p:nth-of-type(2)"
  );
  let player3DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(3) p:nth-of-type(2)"
  );
  let player4DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(4) p:nth-of-type(2)"
  );

  player1DomPair.innerText = "0";
  player2DomPair.innerText = "0";
  player3DomPair.innerText = "0";
  player4DomPair.innerText = "0";
}

function gamOverModalReset() {
  // let activeGameCards = document.querySelectorAll('.active')
  // activeGameCards.forEach(card => console.log(card) )

  const gameOver = document.querySelector(".game-over-modul");
  if (gameOver.classList.contains("hide")) {
  } else {
    gameOver.classList.add("hide");
  }
}

window.addEventListener("click", (e) => {
  let targetedButton = e.target;

  if (targetedButton.classList.contains("restart-button")) {
    setTimeout(() => {
      console.log("restart-button");
      removeChildren(gameGridContainer);
      // restMovesPairsClickCounterOnePlayer()
      // restClickCounter() for single and multi
      // restPairCounter() for multi and single

      restMultiPlayerCustomButton();
      gamOverModalReset();

      if (numArr4x4.length == gridSize.value) {
        // refactoring note this can be moved outside of if statments

        renderGameCards(
          numArr4x4,
          random4x4,
          "four-by-four-container",
          "four-by-four-button"
        );
      }

      if (numArr6x6.length == gridSize.value) {
        renderGameCards(
          numArr6x6,
          random6x6,
          "six-by-six-container",
          "six-by-six-button"
        );
      }

      if (numberOfPlayers.value == 1) {
        countUpTimer();
        onePlayerGamePlay(parseInt(gridSize.value));
      }

      if (numberOfPlayers.value >= 2) {
        const infoContainerMulti = document.querySelector(
          ".info-container-multiplayer"
        );
        infoContainerMulti.classList.remove("hide");

        // this can be its own function
        const playerButtons = document.querySelectorAll(".custom-button");

        for (let i = 0; i < parseInt(numberOfPlayers.value); i++) {
          playerButtons[i].classList.remove("inactive");
        }
        // this can be its own function

        multiplayerGamePlay(numberOfPlayers.value, parseInt(gridSize.value));
      }
    }, 550);
  }

  if (targetedButton.classList.contains("new-game-button")) {
    console.log("new-game-button");
    startGameContainer.classList.remove("hide");
    body.classList.remove("light");

    removeChildren(gameGridContainer);

    gamOverModalReset();
    if (numberOfPlayers.value == 1) {
    }

    if (numberOfPlayers.value >= 2) {
      const infoContainerMulti = document.querySelector(
        ".info-container-multiplayer"
      );
      infoContainerMulti.classList.add("hide");

      // this can be its own function
      const playerButtons = document.querySelectorAll(".custom-button");

      for (let i = 0; i < parseInt(numberOfPlayers.value); i++) {
        playerButtons[i].classList.add("inactive");
      }
      // this can be its own function

      restMultiPlayerCustomButton();
    }
  }
});
