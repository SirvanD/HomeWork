const express = require("express");
const bodyParser = require("body-parser");
const _ = require("underscore");

const app = express();
const PORT = 7070;

// requests
// extra info
// url - query strings
// url - named parameter (pretty urls)
// form - get - query string
// form - post - body

// req.query
// req.params
// req.body

app.set("view engine", "ejs");
app.set(express.static("public"));

app.set("views", "./templates");

function logging(req, res, next) {
  console.log(`${req.method} ${req.path} ${req.url} ${new Date()}`);
  next();
}

//

app.use(logging);

//this is an example of a middleware - basically a function that looks for a file and if found will open it if not go through the rest of the program

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //can also use below line, just send this as render arg
  //new Date().toLocaleDateString()
  res.render("home");
});

app.get("/compliment", (req, res) => {
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

  res.render("compliment.ejs", {
    compliment: randomCompliment,
    color: randomColor,
  });
});

app.get("/welcome", (req, res) => {
  res.render("welcome");
});

app.post("/hello", (req, res) => {
  res.send(req.body.name);
});

// app.get("/:username", function (req, res) {
//   userName = req.params.name;
//   var compliments = [
//     "Your instructors love you",
//     "High five = ^5",
//     "Shut up and take my money",
//     "It's almost beer o'clock",
//     "The Force is strong with you",
//   ];
//   var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
//   randomCompliment = _.sample(compliments);
//   randomColor = _.sample(colors);

//   res.send(req.params.username, {
//     name: req.params.name,
//   });
//   //   res.send(req.params.name);
// });

app.get("/game", (req, res) => {
  let hands = ["rock", "scissors", "paper"];

  let ai = _.sample(hands);
  hand = req.query.hand;
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
    hand: hand,
    ai: ai,
    gameResult: gameResult,
  });
});

//below does log a line to let user about the port
app.listen(PORT, () => {
  console.log(`express has taken the stage at ${PORT}`);
});
