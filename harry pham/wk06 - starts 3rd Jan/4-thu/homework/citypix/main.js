const select1 = document.querySelector('select')
const form = document.querySelector('form')
const body = document.querySelector('body')
const options = document.querySelector('select option')

const cities = ['New York City', 'San Francisco', 'Los Angelos', 'Austin', 'Sydney']
const cityImg = ['nyc', 'sf', 'la', 'austin', 'sydney']

let i=0
cities.forEach(city => {

    const option = document.createElement('option')
    option.textContent = city
    option.className = cityImg[i]
    select1.appendChild(option)
    i++
    console.log(i)
})

const nycElement = document.querySelector('.nyc')
const sfElement = document.querySelector('.sf')
const laElement = document.querySelector('.la')
const austinElement = document.querySelector('.austin')
const sydneyElement = document.querySelector('.sydeny')

document.querySelector("#city-type > option.sf")
function handleBg() {
    body.className="nyc"
}

select1.addEventListener('click', handleBg)

const btn = document.createElement('button')
btn.textContent = 'select'
btn.id = 'submit-btn'

form.appendChild(btn)

