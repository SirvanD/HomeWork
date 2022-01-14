const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
// const res = require("express/lib/response");
const app = express();
const _ = require("underscore");

function logging(req, res, next) {
  console.log(
    `${req.method} ${req.method} ${req.path} ${req.url} ${new Date()}`
  );
  next();
}

// --+
//   |
//   V
app.use(logging); // own middleware

// this is an example of a middleware - function
app.use("/public", express.static("public"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// req.query
// req.params
// req.body

//routing or middleware

// embedded java script for templates
app.set("view engine", "ejs");

app.set("views", "./templates");

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you",
];

colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/compliments", (req, res) => {
  rndCompliment = _.sample(compliments);
  rndColor = _.sample(colors);
  res.render("compliments", {
    rndCompliment: rndCompliment,
    rndColor: rndColor,
  });
  // passing in an object with many values
  // res.send(
  //   "sample compliment : " + rndCompliment + "sample color: " + rndColor
  // );
});

app.get("/game", (req, res) => {
  let hands = ["rock", "scissors", "paper"];
  let userHand = req.query.hand;
  let computerHand = _.sample(hands);

  if (userHand === "rock") {
    if (computerHand === "scissors") {
      res.render("game.ejs", { message: "you win" });
    } else if (computerHand === "paper") {
      res.render("game.ejs", { message: "you lose" });
    } else {
      res.render("game.ejs", { message: "draw" });
    }
  } else if (userHand === "paper") {
    if (computerHand === "rock") {
      res.render("game.ejs", { message: "you win" });
    } else if (computerHand === "scissors") {
      res.render("game.ejs", { message: "you lose" });
      res.send("you lose");
    } else {
      res.render("game.ejs", { message: "draw" });
    }
  } else if (userHand === "scissors") {
    if (computerHand === "paper") {
      res.render("game.ejs", { message: "you win" });
    } else if (computerHand === "rock") {
      res.render("game.ejs", { message: "you lose" });
    } else {
      res.render("game.ejs", { message: "draw" });
    }
  }
});

app.get("/welcome", (req, res) => {
  res.render("welcome");
});

app.post("/hello", (req, res) => {
  res.send(req.body.name);
});

app.get("/:username", (req, res) => {
  rndCompliment = _.sample(compliments);
  rndColor = _.sample(colors);
  userName = req.params.username;
  res.render("compliments", { userName: userName });
});
app.listen(8080);
