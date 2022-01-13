const express = require("express");
const app = express();

const _ = require("lodash");

app.set("view engine", "ejs");
app.set("views", "./templates");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send(new Date().toLocaleTimeString());
});

app.get("/game?:move", (req, res) => {
    let userMove = req.query.hand;
    let computerMoves = ["rock", "paper", "scissors"];
    let computerMove = _.sample(computerMoves);

    let message = "";
    if (userMove === computerMove) {
        message = "It's a draw!"
    } else if (userMove === "rock") {
        if (computerMove === "paper") {
            message = "You lose!"
        } else {
            message = "You win!"
        }
    } else if (userMove === "paper") {
        if (computerMove === "scissors") {
            message = "You lose!"
        } else {
            message = "You win!"
        }
    } else if (userMove === "scissors") {
        if (computerMove === "rock") {
            message = "You lose!"
        } else {
            message = "You win!"
        }
    }
    res.render("rockPaperScissors", {
        message: message,
        computerMove: computerMove,
        userMove: userMove
    });
});


app.get("/:input", (req, res) => {

    let userInput = req.params.input;
    let name = "";
    if (userInput !== "compliment") {
        name = userInput;
    } else {
        name = "friend";
    }

    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you",
        "Your CSS is really great and you clearly put a lot of effort into it",
        "That's a fun moustache you got there",
        "You have superb taste in movies"
    ];
    const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

    let randomCompliment = _.sample(compliments);
    let randomColor = _.sample(colors);

    res.render('compliment', {
        randomCompliment: randomCompliment,
        randomColor: randomColor,
        name: name
    })
});


app.listen(8888);