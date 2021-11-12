import {
  removeChildren,
  shuffleArray,
} from "./array-manipulation-functions.js";
import { countUpTimer } from "./timer.js";

export function onePlayerGamePlay(GameGridValue) {
  const gameGridContainer = document.querySelector(".game-grid");

  let clickCounter = 0;
  const movesCounterDom = document.querySelector(
    ".moves-container p:nth-of-type(2)"
  );
  let moveCounter = 0;
  let firstChoice, secoundChoice;
  let firstChoiceInnerText, secoundChoiceInnerText;
  let firstChocieContainer, secoundChoiceContainer;

  let NumberOfPairs = 0;
  let maxNumberOfMoves = document.querySelector(
    'input[name="moves"]:checked'
  ).value;
  let activeGameCards = document.querySelectorAll(".active");

  // export function restMovesPairsClickCounterOnePlayer(){
  //     moveCounter = 0
  //     movesCounterDom.innerText = `${moveCounter}`
  //     NumberOfPairs = 0
  //     clickCounter = 0
  // }

  function resultRender() {
    const gameOver = document
      .querySelector(".game-over-modul")
      .classList.remove("hide");
    const modulContent = document.querySelector(".modul-content");
    // let rusletHeader = document.createElement('h2')
    // rusletHeader.innerText = 'You did it!'
    // modulContent.appendChild(rusletHeader)
    // let gameOverText = document.createElement('p')
    // gameOverText.innerText = 'Hers\'s how you got on...'
    // modulContent.appendChild(gameOverText)

    // let div = document.createElement('div')
    // modulContent.appendChild(div)
    // let p = document.createElement('p')
    //  p.innerText = document.querySelector('.timer-container p:nth-of-type(2)').innerText
    //  div.appendChild(p)
    let timeAtEnd = document.querySelector(
      ".timer-container p:nth-of-type(2)"
    ).innerText;

    // let content
    modulContent.innerHTML = `<h2 class="result-conclusion">You did it!</h2>
            <p>GAME OVER!</p>
            <p>Hers's how you got on...</p>
            <div class="">
              <p>time Elapesed</p>
              <p>${timeAtEnd}</p>
            </div>
            <div>
              <p>moves</p>
              <p>${moveCounter}</p>
            </div>

            <div>
              <p>number of pairs</p>
              <p>${NumberOfPairs}</p>
            </div>
  
            <div class="button-container">
              <button class="restart-button" >Restart</button>
              <button class="new-game-button" >New Game</button>
            </div>`;

    // modulContent.append(content)
  }

  gameGridContainer.addEventListener("click", (e) => {
    let targetID = e.target.id;

    movesCounterDom.innerText = `${moveCounter}`;
    let selected = document.querySelector(`#${targetID} p`);

    if (
      e.target.classList.contains("four-by-four-button") ||
      e.target.classList.contains("six-by-six-button")
    ) {
      clickCounter++;
      moveCounter++;
    }

    if (clickCounter === 1) {
      firstChoice = selected;
      firstChoiceInnerText = selected.textContent;

      firstChoice.classList.remove("hidden-visiblity");
      firstChocieContainer = document.querySelector(`#${targetID}`);
    }

    if (clickCounter === 2) {
      secoundChoice = selected;
      secoundChoiceInnerText = selected.textContent;

      secoundChoice.classList.remove("hidden-visiblity");
      secoundChoiceContainer = document.querySelector(`#${targetID}`);

      if (firstChoiceInnerText === secoundChoiceInnerText) {
        secoundChoiceContainer.classList.add("matches");
        firstChocieContainer.classList.add("matches");

        setTimeout(() => {
          firstChocieContainer.classList.remove("matches");
          secoundChoiceContainer.classList.remove("matches");
          firstChocieContainer.classList.add("active");
          secoundChoiceContainer.classList.add("active");
          activeGameCards = document.querySelectorAll(".active");
        }, 500);
        clickCounter = 0;
        NumberOfPairs++;
      } else {
        setTimeout(() => {
          firstChoice.classList.add("hidden-visiblity");
          secoundChoice.classList.add("hidden-visiblity");
        }, 500);
        clickCounter = 0;
      }
    }

    setTimeout(() => {
      if (
        maxNumberOfMoves < moveCounter ||
        activeGameCards.length === GameGridValue
      ) {
        resultRender();
        // countUpTimer(clearInterval(timeInterval))
      }
    }, 550);
  });
}

//    fourX4container.classList.add('four-by-four-container')

// playBox.classList.add('four-by-four-button')

export function renderGameCards(
  gameArray,
  randomArray,
  containerStyle,
  cardStyle
) {
  const gameGridContainer = document.querySelector(".game-grid");

  randomArray = shuffleArray(gameArray);
  let cardContainer = document.createElement("div");
  cardContainer.classList.add(containerStyle);
  gameGridContainer.appendChild(cardContainer);
  for (let i = 0; i < gameArray.length; i++) {
    let randomId = i;
    let playBox = document.createElement("div");
    playBox.id = `card-${randomId}`;
    playBox.classList.add(cardStyle);
    playBox.classList.add("game-card");
    cardContainer.appendChild(playBox);

    let valueContent = document.createElement("p");
    // valueContent.id = `card-${randomId}`
    valueContent.classList.add("hidden-visiblity");
    playBox.appendChild(valueContent);
    valueContent.innerText = randomArray[i];
  }
}

export function multiplayerGamePlay(maxNumberOfplayers, GameGridValue) {
  console.log("running");

  const gameGridContainer = document.querySelector(".game-grid");

  let p1MoveCounter = 0;
  let p2MoveCounter = 0;
  let p3MoveCounter = 0;
  let p4MoveCounter = 0;

  let player1DomInput = document.querySelector("#multi-player1");
  let player2DomInput = document.querySelector("#multi-player2");
  let player3DomInput = document.querySelector("#multi-player3");
  let player4DomInput = document.querySelector("#multi-player4");

  const player1DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(1) p:nth-of-type(2)"
  );
  const player2DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(2) p:nth-of-type(2)"
  );
  const player3DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(3) p:nth-of-type(2)"
  );
  const player4DomPair = document.querySelector(
    ".custom-button-container:nth-of-type(4) p:nth-of-type(2)"
  );

  let p1PairCounter = 0;
  let p2PairCounter = 0;
  let p3PairCounter = 0;
  let p4PairCounter = 0;

  let moveCounter = 0;
  let clickCounter = 0;

  let playerNum = 1;
  const maxPlayers = maxNumberOfplayers;

  const updatePlayer = () => {
    if (playerNum == maxPlayers) {
      playerNum = 1;
    } else {
      playerNum++;
    }
  };

  function playerDomToggle() {
    if (playerNum === 1) {
      player4DomInput.checked = false;

      player1DomInput.checked = true;
    }
    if (playerNum === 2) {
      player1DomInput.checked = false;
      player2DomInput.checked = true;
    }
    if (playerNum === 3) {
      player2DomInput.checked = false;
      player3DomInput.checked = true;
    }
    if (playerNum === 4) {
      player3DomInput.checked = false;
      player4DomInput.checked = true;
    }
  }
  playerDomToggle();

  function playerMoveCounter() {
    if (playerNum === 1) {
      p1MoveCounter++;
      // player1DomMoves.innerText = `${p1MoveCounter}`
    }
    if (playerNum === 2) {
      p2MoveCounter++;

      player2DomMoves.innerText = `${p2MoveCounter}`;
    }
    if (playerNum === 3) {
      p3MoveCounter++;

      player3DomMoves.innerText = `${p3MoveCounter}`;
    }
    if (playerNum === 4) {
      p4MoveCounter++;

      player4DomMoves.innerText = `${p4MoveCounter}`;
    }
  }

  function playerPairCounter() {
    if (playerNum === 1) {
      p1PairCounter++;
      player1DomPair.innerText = `${p1PairCounter}`;
    }
    if (playerNum === 2) {
      p2PairCounter++;
      player2DomPair.innerText = `${p2PairCounter}`;
    }
    if (playerNum === 3) {
      p3PairCounter++;
      player3DomPair.innerText = `${p3PairCounter}`;
    }
    if (playerNum === 4) {
      p4PairCounter++;
      player4DomPair.innerText = `${p4PairCounter}`;
    }
  }

  let firstChoice, secoundChoice;
  let firstChoiceInnerText, secoundChoiceInnerText;
  let firstChocieContainer, secoundChoiceContainer;

  let maxNumberOfMoves = document.querySelector(
    'input[name="moves"]:checked'
  ).value;

  let activeGameCards = document.querySelectorAll(".active");

  console.log("this is stored in the function" + activeGameCards.length);

  gameGridContainer.addEventListener("click", (e) => {
    let targetID = e.target.id;

    let selected = document.querySelector(`#${targetID} p`);

    console.log("this is stored in the function" + activeGameCards.length);

    if (
      e.target.classList.contains("four-by-four-button") ||
      e.target.classList.contains("six-by-six-button")
    ) {
      clickCounter++;
      moveCounter++;
    }

    if (clickCounter === 1) {
      firstChoice = selected;
      firstChoiceInnerText = selected.textContent;

      firstChoice.classList.remove("hidden-visiblity");
      firstChocieContainer = document.querySelector(`#${targetID}`);
    }

    if (clickCounter === 2) {
      secoundChoice = selected;
      secoundChoiceInnerText = selected.textContent;

      secoundChoice.classList.remove("hidden-visiblity");
      secoundChoiceContainer = document.querySelector(`#${targetID}`);

      if (firstChoiceInnerText === secoundChoiceInnerText) {
        secoundChoiceContainer.classList.add("matches");
        firstChocieContainer.classList.add("matches");
        playerPairCounter();
        updatePlayer();

        setTimeout(() => {
          firstChocieContainer.classList.remove("matches");
          secoundChoiceContainer.classList.remove("matches");
          firstChocieContainer.classList.add("active");
          secoundChoiceContainer.classList.add("active");
          playerDomToggle();
          activeGameCards = document.querySelectorAll(".active");
        }, 500);
        clickCounter = 0;
      } else {
        updatePlayer();

        setTimeout(() => {
          firstChoice.classList.add("hidden-visiblity");
          secoundChoice.classList.add("hidden-visiblity");
          playerDomToggle();
        }, 500);
        clickCounter = 0;
      }
    }

    setTimeout(() => {
      if (
        maxNumberOfMoves < moveCounter ||
        activeGameCards.length === GameGridValue
      ) {
        //  console.log('im here and about to render results ')
        //  console.log('lenth of active game cards ' + activeGameCards.length)
        //  console.log('MAX NUMBER of moves ' + maxNumberOfMoves)
        //  console.log('MOVE COUNTER ' + moveCounter)
        //  console.log('NUMBER OF CARDS ' + GameGridValue)

        resultRender();
        // const gameOver = document.querySelector('.game-over-modul').classList.remove('hide')
      }
    }, 550);
  });

  function resultRender() {
    const gameOver = document
      .querySelector(".game-over-modul")
      .classList.remove("hide");
    const modulContent = document.querySelector(".modul-content");
    let h2 = "Losers!!!";
    let gamePlayersResult = [];

    if (maxNumberOfplayers == 2) {
      gamePlayersResult = [
        {
          player: 1,
          pair: p1PairCounter,
          class: "",
        },
        {
          player: 2,
          pair: p2PairCounter,
          class: "",
        },
      ];
    } else if (maxNumberOfplayers == 3) {
      gamePlayersResult = [
        {
          player: 1,
          pair: p1PairCounter,
          class: "",
        },
        {
          player: 2,
          pair: p2PairCounter,
          class: "",
        },
        {
          player: 3,
          pair: p3PairCounter,
          class: "",
        },
      ];
    } else {
      gamePlayersResult = [
        {
          player: 1,
          pair: p1PairCounter,
          class: "",
        },
        {
          player: 2,
          pair: p2PairCounter,
          class: "",
        },
        {
          player: 3,
          pair: p3PairCounter,
          class: "",
        },
        {
          player: 4,
          pair: p4PairCounter,
          class: "",
        },
      ];
    }

    //  console.log('im a player pair counter in render result function ' + p1PairCounter);

    function compare(a, b) {
      if (a.pair < b.pair) {
        return 1;
      }
      if (a.pair > b.pair) {
        return -1;
      }
      return 0;
    }

    function winning() {
      gamePlayersResult = gamePlayersResult.sort(compare);

      if (
        gamePlayersResult[0].pair !== 0 &&
        gamePlayersResult[0].pair === gamePlayersResult[1].pair
      ) {
        h2 = "its a tie!";
        gamePlayersResult[0].class = "winner";
        gamePlayersResult[1].class = "winner";
        if (
          maxNumberOfplayers == 3 &&
          gamePlayersResult[0].pair === gamePlayersResult[2].pair
        ) {
          gamePlayersResult[2].class = "winner";
        }
        if (
          maxNumberOfplayers == 4 &&
          gamePlayersResult[0].pair === gamePlayersResult[3].pair
        ) {
          gamePlayersResult[3].class = "winner";
        }
      }
      if (gamePlayersResult[0].pair > gamePlayersResult[1].pair) {
        h2 = `Player ${gamePlayersResult[0].player} is a Winner!!!`;
        gamePlayersResult[0].class = "winner";
      }
    }

    winning();

    // let content
    if (maxNumberOfplayers == 2) {
      modulContent.innerHTML = `<h2 class="result-conclusion">${h2}</h2>
                <p>GAME OVER!</p>
                <p>Hers's how you got on...</p>
    
                <div class="${gamePlayersResult[0].class}"><p>player ${gamePlayersResult[0].player}</p> <p>${gamePlayersResult[0].pair} pairs</p></div>
    
                <div class="${gamePlayersResult[1].class}"><p>player ${gamePlayersResult[1].player}</p> <p>${gamePlayersResult[1].pair} pairs</p></div>    
                
                <div class="button-container">
                  <button class="restart-button" >Restart</button>
                  <button class="new-game-button" >New Game</button>
                </div>`;
    } else if (maxNumberOfplayers == 3) {
      modulContent.innerHTML = `<h2 class="result-conclusion">${h2}</h2>
                <p>GAME OVER!</p>
                <p>Hers's how you got on...</p>
    
                <div class="${gamePlayersResult[0].class}"><p>player ${gamePlayersResult[0].player}</p> <p>${gamePlayersResult[0].pair} pairs</p></div>
    
                <div class="${gamePlayersResult[1].class}"><p>player ${gamePlayersResult[1].player}</p> <p>${gamePlayersResult[1].pair} pairs</p></div>
    
               <div class="${gamePlayersResult[2].class}"><p>player ${gamePlayersResult[2].player}</p> <p>${gamePlayersResult[2].pair} pairs</p></div>
    
                
                <div class="button-container">
                  <button class="restart-button" >Restart</button>
                  <button class="new-game-button" >New Game</button>
                </div>`;
    } else {
      modulContent.innerHTML = `<h2 class="result-conclusion">${h2}</h2>
                <p>GAME OVER!</p>
                <p>Hers's how you got on...</p>
    
                <div class="${gamePlayersResult[0].class}"><p>player ${gamePlayersResult[0].player}</p> <p>${gamePlayersResult[0].pair} pairs</p></div>
    
                <div class="${gamePlayersResult[1].class}"><p>player ${gamePlayersResult[1].player}</p> <p>${gamePlayersResult[1].pair} pairs</p></div>
    
               <div class="${gamePlayersResult[2].class}"><p>player ${gamePlayersResult[2].player}</p> <p>${gamePlayersResult[2].pair} pairs</p></div>
    
               <div class="${gamePlayersResult[3].class}"><p>player ${gamePlayersResult[3].player}</p> <p>${gamePlayersResult[3].pair} pairs</p></div>
                
                <div class="button-container">
                  <button class="restart-button" >Restart</button>
                  <button class="new-game-button" >New Game</button>
                </div>`;
    }
  }

  window.addEventListener("click", (e) => {
    let targetedButton = e.target;

    if (
      targetedButton.classList.contains("restart-button") ||
      targetedButton.classList.contains("new-game-button")
    ) {
      gameGridContainer.removeEventListener("click");
    }
  });

  console.log("end");
}
