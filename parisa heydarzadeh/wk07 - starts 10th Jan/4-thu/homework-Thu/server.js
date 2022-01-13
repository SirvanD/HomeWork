const express = require("express");
const app = express();

const _ = require("underscore");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("mainpage");
});

app.get("/compliments", (req, res) => {
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you",
  ];

  var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

  randCompliment = _.sample(compliments);
  randColor = _.sample(colors);
  res.render("complement.ejs");
});

app.get("/game", (req, res) => {
  var game = ["paper", "rock", "scissors"];
  hand = req.query.hand;
  server = _.sample(game);
  var result;
  if (hand == server) {
    result = "It's a Draw!";
  } else if (hand == "scissors" && server == "paper") {
    result = "Server Wins!";
  } else if (hand == "paper" && server == "rock") {
    result = "User Wins!";
  } else if (hand == "paper" && server == "scissors") {
    result = "Server Wins!";
  } else if (hand == "scissors" && server == "rock") {
    result = "Server Wins!";
  } else if (hand == "rock" && server == "paper") {
    result = "User Wins!";
  } else if (hand == "rock" && server == "scissors") {
    result = "User Wins!";
  } else {
    result = "Play Again";
  }

  res.render("gamee.ejs")




  app.get("/:name", (req, res) => {
    var compliments = [
      "Your instructors love you",
      "High five = ^5",
      "Shut up and take my money",
      "It's almost beer o'clock",
      "The Force is strong with you",
    ];
  
    var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
    userName  = req.params.name;
    
    randCompliment = _.sample(compliments);
    randColor = _.sample(colors);

    res.render("complement2.ejs");
  });



app.listen(8080);
