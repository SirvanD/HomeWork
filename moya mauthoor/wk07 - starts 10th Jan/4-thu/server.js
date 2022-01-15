const express = require("express");
const app = express();
const PORT = 8080;

const _ = require("lodash");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./templates");

function logging(req, res, next) {
    console.log(`${req.method} ${req.path} ${new Date()}`);
    next();
}

// Logging middleware
app.use(logging)

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send(new Date().toLocaleTimeString());
});

app.get("/game", (req, res) => {
    let userMove = req.query.hand;
    let computerMoves = ["rock", "paper", "scissors"];
    let computerMove = _.sample(computerMoves);

    let message;
    if (userMove === computerMove) {
        message = "It's a draw!"
    } else if (userMove === "rock") {
        (computerMove === "paper" ? message = "You lose!" : message = "You win!");
    } else if (userMove === "paper") {
        (computerMove === "scissors" ? message = "You lose!" : message = "You win!");
    } else if (userMove === "scissors") {
        (computerMove === "rock" ? message = "You lose!" : message = "You win!");
    }
    res.render("rockPaperScissors", {
        message,
        computerMove,
        userMove
    });
});

app.get("/welcome", (req, res) => {
    res.render("welcome");
})

app.post("/hello", (req, res) => {
    res.send(req.body.name);
})

app.get("/:input", (req, res) => {

    let userInput = req.params.input;
    let name = (userInput !== "compliment" ? userInput : "friend");

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

    res.render("compliment", {
        randomCompliment,
        randomColor,
        name
    })
});

// if the requested route hasn't been found, would have a 404 option here


app.listen(PORT, () => {
    console.log(`express has started on port ${PORT}`);
});