const express = require('express');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './templates');

app.use(express.static('public'));

var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you",
    "You did it. Yay",
    "You are as much a failure as you believe you are"
  ]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#000000", "#023020", "#301934"]

app.get('/', (req,res) => {
    let date = new Date()
    res.render('index', {date: date})
})

app.get('/compliment', (req, res) => {
    let compliment = _.sample(compliments)
    let color = _.sample(colors)
    res.render('compliment', {compliment: compliment, color: color})
})

var game = ['rock', 'paper', 'scissors']

app.get('/game', (req, res) => {
    let computerChoice = _.sample(game)
    function playGame(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) {
            result = 'a tie';
        } else if ((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')) {
            result = "lose";
        } else {
            result = "win"
        }
        return result
    }
    playGame(req.query.hand, computerChoice);
    console.log(req.query.hand);
    res.send(`You played ${req.query.hand}. The computer played ${computerChoice}. The result is ${result}.`);
})

app.get('/:name', (req, res) => {
    let compliment = `${_.sample(compliments)}, ${req.params.name}`
    let color = _.sample(colors)
    res.render('compliment', {compliment: compliment, color: color})
})

app.listen(8080);