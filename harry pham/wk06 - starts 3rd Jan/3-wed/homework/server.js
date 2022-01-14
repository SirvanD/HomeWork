const express = require('express')
const app = express()
const _= require('underscore')
const bodyParser = require('body-parser')

// express is really just 2 things
// routing
// middleware
// res = response
// req = request

app.set('view engine', 'ejs') //require ejs for you
app.set('views', './templates')


// functions
function randInd(item) {
    return Math.floor(Math.random()* item.length)
}

function logging(req, res, next) {
    console.log(`${req.method} ${req.path} ${new Date()}`)
    next()
}

// example of a middleware
app.use(logging)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))


// routes
app.get('/', (req, res) => {
    let today = new Date()
    res.send(today.toLocaleTimeString())
})

app.get('/compliment', (req, res) => {
    console.log("yes")
    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ]
    const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    res.render(`compliment`, { 
        compliment: compliments[randInd(compliments)],
        color: colors[randInd(colors)]
    })
})


//req.query is what is passed in the routing
app.get('/game', (req, res) => {
    console.log(req.query['hand'])
    let hands = ['rock', 'paper', 'scissor']
    let randomHand = hands[randInd(hands)]
    if(req.query['hand'] == randomHand) {
        res.send("tie!")
        console.log(randomHand)
    } else if(req.query['hand'] == 'paper' && randomHand == 'rock') {
        res.send('you win!! paper beats rock')
        console.log(randomHand)
    } else if(req.query['hand'] == 'rock' && randomHand == 'scissor') {
        res.send('you win!! rock beats scissor')
        console.log(randomHand)
    } else if (req.query['hand'] == 'rock' && randomHand == 'paper') {
        res.send('you lose !!')
        console.log(randomHand)
    } else if(req.query['hand'] == 'scissor' && randomHand == 'paper') {
        res.send('you win!! scissor beats paper')
        console.log(randomHand)
    } else if (req.query['hand'] == 'scissor' && randomHand == 'rock') {
        res.send('you lose !!')
        console.log(randomHand)
    }
})

app.get('/welcome', (req, res) => {
    res.render('welcome')
})


// form get name will be in req.query.(parameter name)
// form post name will be in req.
app.post('/hello', (req, res) => {
    res.send(req.body.name)
})

app.listen(8080)