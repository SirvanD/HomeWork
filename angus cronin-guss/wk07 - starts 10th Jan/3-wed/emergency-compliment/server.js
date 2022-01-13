const express = require('express');
const _ = require('underscore')
require('nodemon')
const app  = express() 

app.set('view engine', 'ejs')
app.set('views', './templates')


app.get('/', (req,res) => {
    res.send(res.query)
})



app.get('/compliment', (req, res) => {
    
    
    compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]
      
      colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

      let randomComp = res.send(_.sample(compliments))
      let randomColor = res.send(_.sample(colors))
      
      res.render('compliments')
    
} )

app.get('/game/:option', (req, res) => { 
    let hand = [
        'rock',
        'paper',
        'scissors'
    ]
    res.send(req.params.option)
    let computer = req.get(_.sample(hand))
    res.send(computer)
})


app.listen(1290) 