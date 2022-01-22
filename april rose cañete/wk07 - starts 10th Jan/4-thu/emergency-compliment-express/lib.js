const _ = require('underscore')

const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

const handShapes = ['rock', 'paper', 'scissors']


function getRandomCompliment() {
    return _.sample(compliments)
}

function getRandomColor() {
    return _.sample(colors)
}

function getRandomColor() {
    return _.sample(colors)
}

function getRandomHandShape() {
    return _.sample(handShapes)
}

function gameResult(playerChoice, serverChoice) {

    if (playerChoice === serverChoice) {
        return "It is a draw!";
      }
  
      //Check for Rock
      if (playerChoice === "rock") {
        if (serverChoice === "scissors") {
          return "You win!";
        } else {
          return "You lose!";
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (serverChoice === "scissors") {
          return "You lose!";
        } else {
          return "You win!";
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (serverChoice === "rock") {
            return "You lose!";
        } else {
            return "You win!";
        }
      }
}

module.exports = {
    getRandomCompliment: getRandomCompliment,
    getRandomColor: getRandomColor,
    getRandomHandShape: getRandomHandShape,
    gameResult: gameResult
}