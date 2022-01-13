const express = require("express");
const { result } = require("underscore");

const app = express();
const _ = require("underscore");

app.set("view engine", "ejs");
app.set(express.static("public"));

app.set("views", "./templates");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/compliment/:name", function (req, res) {
  userName = req.params.name;
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you",
  ];
  var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
  randomCompliment = _.sample(compliments);
  randomColor = _.sample(colors);

  res.render("compliment2.ejs", {
    name: req.params.name,
  });
  //   res.send(req.params.name);
});

app.get("/compliment", (req, res) => {
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you",
  ];
  var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
  randomCompliment = _.sample(compliments);
  randomColor = _.sample(colors);

  res.render("compliment.ejs");
});

app.get("/game", (req, res) => {
  game = ["rock", "scissors", "paper"];

  serverChoice = _.sample(game);
  hand = req.query.hand;
  ai = serverChoice;
  var gameResult;
  if (hand == ai) {
    gameResult = "It's a Draw!";
  } else if (hand == "paper" && ai == "rock") {
    gameResult = "User Wins!";
  } else if (hand == "paper" && ai == "scissors") {
    gameResult = "Server Wins!";
  } else if (hand == "scissors" && ai == "paper") {
    gameResult = "Server Wins!";
  } else if (hand == "scissors" && ai == "rock") {
    gameResult = "Server Wins!";
  } else if (hand == "rock" && ai == "paper") {
    gameResult = "User Wins!";
  } else if (hand == "rock" && ai == "scissors") {
    gameResult = "User Wins!";
  } else {
    gameResult = "pick your hand by typing in 'hand=paper' in address bar";
  }
  res.render("game", {
    hand: req.query.hand,
    ai: serverChoice,
    gameResult: gameResult,
  });
});

app.listen(7070);
