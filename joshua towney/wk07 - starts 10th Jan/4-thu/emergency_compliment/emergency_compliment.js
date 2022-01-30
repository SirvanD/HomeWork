const express = require('express')
// const res = require('express/lib/response') - this is a gues from vs code so is uneeded.
const dayjs = require('dayjs')
const _ = require('underscore')
// const bodyParser = require('body-parser')

const app = express()
const now = dayjs()

// REQUESTS - can get extra info via:
// url -query strings
// url - named paramter (pretty urls)
// form - get - query string
// form - post - body

// res.query
// req.params
// req.body


// function logging(req, res, next) {
//     console.log(`${req.method} ${req.path} ${new Date()}`)
//     next()
// }

// ---+
//    |
//    V

// app.use(logging) - all requests will go through logging first - useful to display timestamps and where they tried to go etc.

// ---+
//    |
//    V stops at station - keeps going til it gets a response. if o response 404 error

app.set('view engine', 'ejs')

app.set('views', 'templates') // or './views' instead of templates

// this is an example of a middleware -  function
// app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(now.toString())
    //res.send(new Date().toLocaleTimeString) - negates time library
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

    // let randomCompliment = _.sample(compliment)
    // let randomColor = _.sample(colors)

    res.render('show', {colors, _ ,compliments})
                       //{compliment: randomCompliment}
                       //{color: randomColor}
                       // key vlue pairs like an erb file

})

// app.get('/hello, ()req, res) => {
//     res.send(req.body.name) - works with middleware to get data from form - submit the form using post. name = 'name
// })

app.get('/game', (req, res) => {

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