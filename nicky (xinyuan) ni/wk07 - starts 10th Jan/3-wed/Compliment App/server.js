const express = require('express')

const app = express()


app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))


app.get('/', (req, res) => {
    var compliments = [
        "Are you a parking ticket? Because you’ve got FINE written all over you.",
        "You might be the primary reason for global warming.",
        "You must be the square root of negative one... Because you are unreal.",
        "If you are here, who's running heaven?",
        "So, aside from taking my breath away, what do you do for a living?",
        "I can't tell if that was an earthquake, or if you just seriously rocked my world."
    ]
    var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  
    res.render('show', {
      compliment: compliment
    });
});

app.get('/game',(req,res) => {

  var hands = ['rock', 'scissors', 'paper']
  var userHand = req.query.hand
  var computerHand = hands[Math.floor(Math.random() * 2)];

  res.render('game', {
    userHand: userHand,
    computerHand: computerHand
  });
})
app.listen(8080)