const express = require('express')
const _ = require('underscore')
const app = express()
const PORT = 8080

//express is just 2 things
//routing
//middleware

app.set('view engine', 'ejs') //require ejs for you
app.set('views', './templates') //which folder you want to put your ejs templates

//this is an example of middleware
app.use(express.static('public'))



app.get('/', (req, res) => {
    // const start = Date.now();
    res.send(new Date().toLocaleTimeString())
})

app.get('/compliment', (req, res) => {

    const compliments = [
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
        compliment: randomCompliment,
        color: randomColor
    })
})


app.get('/game', (req, res) => {

    let hands = ['rock', 'scissors', 'paper']

    let userHand = req.query.hand
    let computerHand = _.sample(hands)

    res.send(`user hand ${userHand}, computer hand ${computerHand}`)

})

app.get('/:username', (req, res) => {

    res.send(req.params.username)
})


app.listen(PORT, () => {
    console.log(`express has taken the stage at ${PORT}`)
})