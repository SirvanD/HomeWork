const express = require('express')
const bodyParser = require('body-parser')
const res = require('express/lib/response')

const _ = require('underscore')

const app = express()
const port = 5050

app.set(`view engine`, `ejs`) 

app.set('views', './templates')

//middleware - a function that decides what to do.
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

function logging(req, res, next) {
    console.log(`${req.method} ${req.path} ${new Date()}`)
    next()
}

// ---+
//    |
//    V
app.use(logging)

app.get('/compliments', (req, res) => {
    
    const compliments = [
        [`looking good today`],
        ['you look kind of okay i guess'],
        ['you look like mario from mario bros.'],
        ['i like your pet llama']
    ]
    
    const colors = [
        ["mistyrose"],
        ["aqua"],
        ["magenta"],
        ["gainsboro"]
    ]

    let colorGenerator = _.sample(colors)

    let quote = _.sample( compliments )
    console.log(quote)
    
    res.render("show", {
        quote: quote,
        colorGenerator: colorGenerator
    })
})

app.get('/', (req, res) => {

    const today = new Date()
    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    res.render("origin", {
        time: time
    })  
})

app.get('/game', (req, res) => {
    console.log(req.query)
    res.send(`your move was ${req.query.hand}`)
    let hands = ['rock', 'scissors', 'paper']
    let computerHand = _.sample(hands)


    res.send(`user hand ${req.query.hand}`)
})

app.get('/welcome', (req, res) => { 
    res.render(`welcome`)

})

app.post('/hello', (req, res) => {
    res.send(req.body.name)
})

// app.get('/:username', (req, res) => {
//     res.send(req.params.username)
// })



app.listen(port, () => {
    console.log(`you have taken the stage at ${port}`)
})
