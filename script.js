"use strict";

//selecting the ele
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");
const score0el = document.getElementById("score--0");
const score1el = document.getElementById("score--1");
const currScore0 = document.getElementById("current--0");
const currScore1 = document.getElementById("current--1");
const diceImg = document.querySelector(".dice");
const newgameBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");
const rollBtn = document.querySelector(".btn--roll");

//starting condition
diceImg.classList.add("hidden");

//declaring variables
const totalScoresOfPlayers = [0, 0]; //[player1,player2]
let currentScore = 0;
let currentPlayer = 0; //active player since the game starts with oth player, we are setting it to 0

/*===================
ROLL DICE CONDITION:
====================*/
rollBtn.addEventListener("click", function () {
  //1)generating a random dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  //2)display the roll images based on random num generated in step1
  //a)remove hidden class to display dice img
  diceImg.classList.remove("hidden");

  //b)change the dice img based on dicenum
  diceImg.src = `dice-${diceNum}.png`;

  //3)check if rolled num is 1:

  if (diceNum !== 1) {
    //add the dicenum to current score and display score to curr player
    currentScore += diceNum;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    //a)setting current score to 0 if 1
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;

    //b)switching of players
    currentPlayer = currentPlayer === 0 ? 1 : 0;

    //c)switching the background color for the active player
    player0el.classList.toggle("player--active");
    player1el.classList.toggle("player--active");
  }
});
