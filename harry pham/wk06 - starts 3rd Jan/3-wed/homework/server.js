const express = require('express')
const app = express()
const _= require('underscore')


//express is really just 2 things
//routing
//middleware

function randInd(item) {
    return Math.floor(Math.random()* item.length)
}

app.set('view engine', 'ejs') //require ejs for you
app.set('views', './templates')

app.use(express.static('public'))


app.get('/', (req, res) => {
    let today = new Date()
    let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    res.send(date)
})


app.get('/compliments', (req, res) => {
    console.log("yes")
    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ]
    res.send(`hello ${compliments[randInd(compliments)]}`)
})

app.get('/game/:hand', (req, res) => {
    console.log(req.params['hand'])
    let hands = ['rock', 'paper', 'scissor']
    let randomHand = hands[randInd(hands)]
    if(req.params['hand'] == randomHand) {
        res.send("tie!")
        console.log(randomHand)
    } else if(req.params['hand'] == 'paper' && randomHand == 'rock') {
        res.send('you win!! paper beats rock')
        console.log(randomHand)
    } else if(req.params['hand'] == 'rock' && randomHand == 'scissor') {
        res.send('you win!! rock beats scissor')
        console.log(randomHand)
    } else if (req.params['hand'] == 'rock' && randomHand == 'paper') {
        res.send('you lose !!')
        console.log(randomHand)
    } else if(req.params['hand'] == 'scissor' && randomHand == 'paper') {
        res.send('you win!! scissor beats paper')
        console.log(randomHand)
    } else if (req.params['scissor'] == 'scissor' && randomHand == 'rock') {
        res.send('you lose !!')
        console.log(randomHand)
    }
})

app.listen(8080)