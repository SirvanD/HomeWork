const express = require('express')
const _ = require('underscore')
const bodyParser = require('body-parser')
const app = express()

app.listen(8888)

// const PORT = 8080
// app.listen(PORT, () => {
//     console.log(`express has taken the stage at ${PORT}`)
// })


app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}))

// When you visit the root / path of your app. it should display the server time.

app.get('/', (req, res) => {
    let currentTime = new Date();
    // res.send(`${currentTime}`)
    res.render('index', {
        currentTime
    })
})


// When you visit the ("/compliment") path of your app, it should display a generic greeting and a randomly chosen compliment. The background color of the app should be randomized as well. Use server side technology (no client side js for this exercise) to set the background color (may be inline style).

app.get('/compliment', (req, res) => {
    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ];

    let colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

    let currentCompliment = _.sample(compliments, 1);
    let currentColor = _.sample(colors, 1);

    // res.send(`${currentCompliment}`)
    res.render('compliment', {
        currentColor,
        currentCompliment
    })
})

// task 3: scissors paper rock
// When you visit the /game path with a query string of hand=paper or hand=scissors or hand=rock (ie: /game?hand=paper ). Play a game of scissors paper rock with the server. The user type in the hand they want to play as query string and the server will randomly select their hand and display the result (you win, you lose or draw) as a response.

app.get('/game', (req, res) => {
    let hands = ["paper", "rock", "scissors"];
    let computerHand = _.sample(hands, 1);

    // console.log(req.params)
    // res.send(`well hello there ${req.params.name}`)


    // req.params contains route parameters (in the path portion of the URL), and req.query contains the URL query parameters (after the ? in the URL).
    let userHand = req.query["hand"]

    res.render('game', {
        computerHand,
        userHand
    })
})

// task 4: personalized compliment
// When you visit /user_can_type_in_any_name (ie: /dt or /bob or /potato), the greeting should personalize itself to the provided name. There should still be a random compliment and background color.

app.post('/greetings', (req, res) => {
    res.redirect(`/${req.body.name}`)
})

app.get('/:name', (req, res) => {

    // console.log(req.params)
    // res.send(`Hi ${req.params.name}`)

    let userName = req.params.name

    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ];

    let colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

    let currentCompliment = _.sample(compliments, 1);
    let currentColor = _.sample(colors, 1);

    res.render('compliment_name', {
        currentColor,
        currentCompliment,
        userName
    })

})

app.post('/:name', (req, res) => {
    let userNewName = req.body.name
    res.send(userNewName)

})



// if (userHand == computerHand) {
//     It is a tie!
// } else {
//     if (userHand == "paper") {
//         if (computerHand == "rock") {
//         You win!
//         } else {
//             if (computerHand == "scissors") {
//             You lost!
//             }
//         }
//     }
//     if (userHand == "scissors") {
//         if (computerHand == "rock") {
//         You lost!
//         } else {
//             if (computerHand == "paper") {
//             You win!
//             }
//         }
//     }
//     if (userHand == "rock") {
//         if (computerHand == "paper") {
//         You lost!
//         } else {
//             if (computerHand == "scissors") {
//             You win!
//             }
//         }
//     }
// }

