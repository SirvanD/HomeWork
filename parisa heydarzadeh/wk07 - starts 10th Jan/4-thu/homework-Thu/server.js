const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const _ = require("underscore");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));


function logging(req, res, next) {
    console.log(`${req.method} ${req.path} ${req.url} ${new Date()}`);
    next();
  }
// this is an example of a middleware -function
app.use(bodyParser.urlencoded({extended: false}))
app.use(logging)

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
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

  let randCompliment = _.sample(compliments);
  let randColor = _.sample(colors);

  res.render("compliments", {
      compliment: randCompliment,
       color: randColor
  });

  app.get("/welcome", (req, res) => {
    res.render("welcome");
  });
  
  app.post("/hello", (req, res) => {
    res.send(req.body.name);
  });


app.get("/game", (req, res) => {
  let game = ["paper", "rock", "scissors"];
  let hand = req.query.hand;
  let server = _.sample(game);
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

  es.render("game", {
    hand: hand,
    server: server,
    result: result,
  });
});


app.listen(PORT, () => {
    console.log(`express has taken the stage at ${PORT}`);
  });


//   app.get("/:name", (req, res) => {
//     var compliments = [
//       "Your instructors love you",
//       "High five = ^5",
//       "Shut up and take my money",
//       "It's almost beer o'clock",
//       "The Force is strong with you",
//     ];
  
//     var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
//     userName  = req.params.name;

//     randCompliment = _.sample(compliments);
//     randColor = _.sample(colors);

//     res.render("");
//   });



app.listen(8080);
