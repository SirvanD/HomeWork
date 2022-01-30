const express = require('express')

const app = express()
const _ = require('underscore')
app.set('views', './views')
app.set('view engine', 'ejs')

// function test() {
//     // console.log('start timer');
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     // console.log('after 1 second');
//     window.location.reload();
// }


var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you",
    "You’re more fun than a bubble wrap.",
    "If it was legal to marry food, I’d still choose you over pizza.",
    "Let’s say you were cloned. I bet you’d still be one of a kind. And the better looking one!",
    "Are you a beaver, because damn!",
    "On a scale of 1 to 10, you’re an 11.",
]

var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080", "#F1C40F", "#DFFF00", "#D3FFCE", "#ffe4e1"]

app.get('/', (req, res) => {
    var serverTime = new Date()
    res.send(`<h1 id='time'>${serverTime}</h1>`)
    // res.redirect(req.get('referer'));
    res.redirect(req.originalUrl)
})

app.get('/compliment', (req, res) => {
    res.send(`< body style = "background-color:${_.sample(colors)}" > <h1 style="text-align:center">${_.sample(compliments)}</h1></body > `)

})

app.get('/game', (req, res) => {
    // "/game?hand=paper"
    var table = { "rock": 0, "paper": 1, "scissor": 2 }
    var userChoice = req.query.hand
    var userNum = table[userChoice]
    var computerNum = _.sample(table)
    var result = userNum => {
        return (computerNum - userNum) == 1 || (computerNum - userNum) == -2 ? "You lose"
            : (computerNum - userNum) == 0 ? "It's a draw"
                : "You win"
    }
    res.send(`${result(userNum)}`)
})

app.get('/:user_can_type_in_any_name', (req, res) => {
    console.log(req.params)
    res.send(`<body style="background-color:${_.sample(colors)}"><h1 style="text-align:center">Hello ${req.params['user_can_type_in_any_name']}! ${_.sample(compliments)}</h1></body>`)
})



app.listen(1234)