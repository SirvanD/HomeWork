const express = require("express");
const APP = express();
const _ = require("underscore");
const PORT = 2020;

APP.listen(PORT, () => {
  console.log(`Express is up and running, listening on ${PORT}`);
});

//SETUP TEMPLATES
APP.set("view engine", "ejs");
APP.set("views", "./views");

//ROUTES
APP.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

APP.get("/:name", (req, res) => {
  let name = req.params.name;
  const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you",
  ];
  const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
  let randomCompliment = _.sample(compliments);
  let randomColor = _.sample(colors);

  res.render("customCompliment", {
    compliment: randomCompliment,
    color: randomColor,
    name: name,
  });
});

APP.get("/compliment", (req, res) => {
  const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you",
  ];
  const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
  let randomCompliment = _.sample(compliments);
  let randomColor = _.sample(colors);

  res.render("compliment", {
    compliment: randomCompliment,
    color: randomColor,
  });
});

APP.get("/game", (req, res) => {
  let options = ["rock", "paper", "scissors"];
  let userChoice = req.query.hand;
  let computerChoice = _.sample(options);
  let winnerMessage;

  if (userChoice == computerChoice) {
    winnerMessage = "draw";
  } else if (computerChoice == "rock") {
    winnerMessage = "rock" && userChoice == "paper" ? "you win" : "you lose";
  } else if (computerChoice == "paper") {
    winnerMessage =
      "paper" && userChoice == "scissors" ? "you win" : "you lose";
  } else if (computerChoice == "scissors") {
    winnerMessage = "scissors" && userChoice == "rock" ? "you win" : "you lose";
  } else {
    winnerMessage = "you musta picked something wiiiiieeerd!";
  }
  res.render("game", {
    user: userChoice,
    computer: computerChoice,
    outcome: winnerMessage,
  });
});
