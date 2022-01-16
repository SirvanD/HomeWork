const _ = require('lodash')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// routing
// middlewares

// when you're sending requests to the server, you can send extra infor: 
// url - query strings 
// url - named paramater (pretty urls)
// form - get - query string
// form - post-body

// rew.query
// req.params
// req.body



app.set('view engine', 'ejs') // set the engine, automatically requires ejs for you 
app.set('views', './views') // choose the folder where you want these pages generated to 
app.use(express.static('public')) // this is an example of a middleware
app.use(bodyParser.urlencoded({ extended: false }))

function logging(req, res, next) {
    console.log(`${req.method} ${req.path} ${new Date()}`)
    next()
}

app.use(logging)



app.get('/', (req, res) => {

    let time = new Date().toLocaleTimeString()

    res.render('home', {
        time: time
    })
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

app.get('/user_can_type_any_name/:name', (req, res) => {
    res.send(req.params.name)
    
    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ]
    colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    let name = req.send
    let compliment = _.sample(compliments)
    let randomColor = _.sample(colors)

    res.render('user_can_type_any_name/:name', {
        compliment: compliment,
        name: name,
        randomColor: randomColor
    })
})

app.get('/welcome', (req, res) => {

    let time = new Date().toLocaleTimeString()

    res.render('welcome', {
        time: time
    })
})

// you would add your 404 down here bc the logging would go through each page like choo choo express train

app.listen(8080)



function parseQueryString(queryString) {
    let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"
    let queryString = url.substring(url.indexOf('?')+1)
    console.log(new URLSearchParams(url))
}