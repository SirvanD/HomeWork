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
    res.render('show', { randomCompliment: lib.getRandomCompliment(), randomColor: lib.getRandomColor(), name: ''})
})

app.get('/game', (req, res) => {
    let playerHand = req.query.hand
    let serverHand = lib.getRandomHandShape()

    res.send(lib.gameResult(playerHand, serverHand) + `\n server played ${serverHand}`)
})

app.get('/:name', (req, res) => {
    let name = req.params.name.toUpperCase()

    res.render('show', { randomCompliment: lib.getRandomCompliment(), name: name, randomColor: lib.getRandomColor()})
})

app.listen(8080)