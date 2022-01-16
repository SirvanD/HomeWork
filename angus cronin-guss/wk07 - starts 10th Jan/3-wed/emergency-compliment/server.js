const express = require ('express')
const bodyParser = require('body-parser')
const _ = require('underscore')
const app = express()
const PORT = 8080

app.set('view engine', 'ejs')
app.set('views', './templates')


app.get('/', (req,res) => {
    res.send(res.query)
})


function logging(req, res, next) {
    console.log(`${req.method} ${req.path} ${new Date()}`);
    next()
    
}

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(logging)

// Task 1 
app.get('/', (req, res) => {
    res.send(new Date().toLocaleDateString())
})

// Task 2
app.get('/compliment', (req, res) => {

    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]
    const color = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
    let randomColor = _.sample(color)

    let randomCompliment = _.sample(compliments)
    // needs to go last 
    res.render('compliments', {
        compliment: randomCompliment, 
        color: randomColor
    }) 

    
})

// Task 3

app.get('/game', (req, res) => {

    let hand = [
        'rock',
        'paper',
        'scissors'
    ]
    let userHand = req.query.hand
    let computerHand = _.sample(hand)

    res.send(`User hand ${userHand}, computer hand ${computerHand}`)
    if (userHand == computerHand) {
        res.send(`It's a draw`)
    } else if ( userHand == 'rock' && computerHand == 'scissors') {
        res.send('The user who picked rock wins')
    } else if ( userHand == 'paper' && computerHand == 'rock') {
        res.send('The user who picked paper wins')
    } else if ( userHand == 'scissors' && computerHand == 'rock') {
        res.send('The user who picked rock wins')
    }
})

// Task 4

app.get('/:name', (req, res) => {

    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]
    const color = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
    let randomColor = _.sample(color)
    let name = req.params.name
    let randomCompliment = _.sample(compliments)
    // needs to go last 
    res.render('task4', {
        compliment: randomCompliment, 
        color: randomColor,
        name: name
    }) 
    

    
})



app.listen(PORT, () => { 
    console.log(`Express has taken the stage at ${PORT}`);
    
})