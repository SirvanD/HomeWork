const express = require('express')
const _ = require('underscore')
const lib = require('./lib.js')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('server time = ' + Date())
})

app.get('/compliment', (req, res) => {
    // http.backgroundColor = lib.getRandomColor()
    let randomColor = lib.getRandomColor()
    let randomCompliment = lib.getRandomCompliment()

    res.render('show', { randomCompliment: randomCompliment, randomColor: randomColor, name: ''})
})

app.get('/game', (req, res) => {
    let playerHand = req.query.hand
    let serverHand = lib.getRandomHandShape()

    res.send(lib.gameResult(playerHand, serverHand) + `\n server played ${serverHand}`)
})

app.get('/:name', (req, res) => {
    let name = req.params.name.toUpperCase()
    let randomCompliment = lib.getRandomCompliment()
    let randomColor = lib.getRandomColor()

    res.render('show', { randomCompliment: randomCompliment, name: name, randomColor: randomColor})
})

app.listen(8080)