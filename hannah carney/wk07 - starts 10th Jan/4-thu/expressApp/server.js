const _ = require('lodash')
const express = require('express')
const app = express()


app.set('view engine', 'ejs') // set the engine, automatically requires ejs for you 
app.set('views', './views') // choose the folder where you want these pages generated to 
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/compliment', (req, res) => {
    
    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ]
    colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


    let randomCompliment = _.sample(compliments)
    let randomColor = _.sample(colors)

    res.render('compliment', {
        randomCompliment: randomCompliment,
        randomColor: randomColor
    })
})

app.get('/game', (req, res) => {
    let userHand = req.query.hand.toLowerCase()

    let gameHands = [
        "paper",
        "scissors",
        "rock"
    ]

    let randomHand = _.sample(gameHands)


    res.render('game', {
        randomHand: randomHand,
        userHand: userHand
    })
})

app.get('/user_can_type_any_name', (req, res) => {
    let name = req.params.name
    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ]
    let randomCompliment = _.sample(compliments)
    let randomCompliment = _.sample(compliments)
    let randomColor = _.sample(colors)
    
    res.send(`${randomCompliment} ${name}`)
    res.render('personalised', {
        randomCompliment: randomCompliment,
        name: name,
        randomColor: randomColor
    })
})

app.listen(8080)
