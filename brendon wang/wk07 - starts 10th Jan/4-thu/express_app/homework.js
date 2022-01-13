const _ = require('underscore')
const express = require('express')
const app = express()

app.set('views', './templates')
app.set('public', './public')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send(Date())
})


app.get('/compliment', (req, res) => {
    var compliments = [
        "Your instructors love you",
        "High five loser",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The loser is strong with you",
        "you suck"
    ]
    var compliment = _.sample(compliments)
    var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]
    var color = _.sample(colors)
    res.render('compliment', {
        compliment: compliment,
        color: color
    })
})

app.get('/game', (req, res) => {
    var hands = [
        "rock",
        "paper",
        "sissors"
    ]
    var playerHand = req.query.hand
    var serverHand = _.sample(hands)
    if (serverHand == playerHand) {
        result = "draw"
    } else if (playerHand == "rock") {
        if (serverHand == "paper") {
            result = "you lose"
        } else {
            result = "you win"
        }
    } else if (playerHand == "sissors") {
        if (serverHand == "rock") {
            result = "you lose"
        } else {
            result = "you win"
        }
    } else if (playerHand == "paper") {
        if (serverHand == "sissors") {
            result = "you lose"
        } else {
            result = "you win"
        }
    } else {
        res.send("rock paper or sissors only")
    }
    res.send(`you use ${playerHand} and computer uses ${serverHand} so ${result}`)
})

app.get("/usercantypeinanyname/:name", (req, res) => {
    userName = req.params.name
    var compliments = [
        "Your instructors love you",
        "High five loser",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The loser is strong with you",
        "you suck"
    ]
    var compliment = `${_.sample(compliments)} ${userName}`
    var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]
    var color = _.sample(colors)
    res.render('compliment', {
        compliment: compliment,
        color: color
    })
})

app.listen(8080)


