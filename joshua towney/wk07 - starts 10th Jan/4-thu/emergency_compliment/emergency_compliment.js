const express = require('express')
const res = require('express/lib/response')
const dayjs = require('dayjs')
const _ = require('underscore')

const app = express()
const now = dayjs()



app.set('view engine', 'ejs')

app.set('views', 'templates')

app.get('/', (req, res) => {
    res.send(now.toString())
})

app.get('/compliment', (req, res) => {

    const compliments = [
        "DT is not that mean",
        "Dan is not out to get you",
        "Nice pants",
        "You remind me of a young Schwarzenegger",
        "The Force is strong with you"
      ]

    const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    res.render('show', {colors, _ ,compliments})

})

app.get('/game/', (req, res) => {

    const hands = ['rock','paper','scissors']
    let playerHand = req.query.hand.toLowerCase()
    let serverHand = _.sample(hands)
    if (playerHand != 'rock' && playerHand != 'paper' && playerHand != 'scissors') {
        res.send("That's not a valid option, idiot!")
    } else if (playerHand == serverHand) {
        res.send(`Player used ${playerHand}. Server used ${serverHand}. It's a draw`)
    } else if (playerHand == 'rock' && serverHand == 'scissors' || playerHand == 'scissors' && serverHand == 'paper' || playerHand == 'paper' && serverHand == 'rock') {
        res.send(`Player used ${playerHand}. Server used ${serverHand}. Player Wins`)
    }  else {
        res.send(`Player used ${playerHand}. Server used ${serverHand}. Server Wins`)
    }

})


app.get('/:name', (req, res) => {

    const compliments = [
        "You can do it",
        "It's only hard until you understand it",
        "Nice pants",
        "You remind me of a young Schwarzenegger",
        "The Force is strong with you"
      ]

    const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    let userName = req.query.name

    res.render('show2', {colors, _ , compliments, userName})

    res.send('final task')



})



app.listen(2000)