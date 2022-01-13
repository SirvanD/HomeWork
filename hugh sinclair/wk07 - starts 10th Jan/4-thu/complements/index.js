const { resolveInclude } = require('ejs')
const express = require('express')

const app = express()
const _ = require('lodash')
app.use(express.static('public'))


// manual setup if you want to use templates
app.set('view engine', 'ejs') // this will require ejs for you
//which folder you want to put your ejs templates
app.set('views', './templates')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/compliment', (req, res) => {
    var compliments = [`Don't worry, you're doing fine!`, `You got a friend in me`, `You might be bad at coding, but at least you're funny`, `Your mum would be proud of you`, `Let's go get some icecream`]

    var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    var randomColor = _.sample(colors)

    var randomCompliment = _.sample(compliments)

    
    res.render('compliment', { randomCompliment: randomCompliment, randomColor: randomColor})
})

app.get('/game', (req, res) => {
    options = ['scissors', 'paper', 'rock']
    userPlayed = req.query.hand.toLowerCase()
    serverPlayed = _.sample(options)

    res.render('game', { userPlayed: userPlayed, serverPlayed: serverPlayed})
})

app.get('/:name', (req, res) => {

    var compliments = [`Don't worry, you're doing fine!`, `You got a friend in me`, `You might be bad at coding, but at least you're funny`, `Your mum would be proud of you`, `Let's go get some icecream`]

    var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    var randomColor = _.sample(colors)

    var randomCompliment = _.sample(compliments)
    
    var name = req.params.name
    
    res.render('name', { randomCompliment: randomCompliment, randomColor: randomColor, name: name})

})

app.listen(8080)