const express = require('express')
const bodyParser = require('body-parser')
const _ = require('underscore')
const app = express()
const PORT = 8080

//requests
// extra info
//url - query
// url -named parameter (pretty url's)
//form - get - query strings
//form - post - body

//req.query
//req.params
//re.body


//express is just 2 things
//routing
//middleware

app.set('view engine', 'ejs') //require ejs for you
app.set('views', './templates') //which folder you want to put your ejs templates

function logging(req, res, next){

}


//this is an example of middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))


// app.get('/movie', (req, res) => {

//     let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"
//     parseQueryString(url)
//     res.send(new Date().toLocaleTimeString())



// })



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

app.get('/welcome', (req, res) => {
    res.render('welcome')
})

app.get('/hello', (req, res) => {
    res.send('welcome')
})

// app.get('/:username', (req, res) => {

//     res.send(req.params.username)
// })


app.listen(PORT, () => {
    console.log(`express has taken the stage at ${PORT}`)
})