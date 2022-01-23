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

function handleBg() {
    console.log(document.getElementById('city-type').value)
    const value = document.getElementById('city-type').value
    let i = cities.indexOf(value)
    console.log(i)
    body.className= cityImg[i]
}



select1.addEventListener('change', handleBg)

const btn = document.createElement('button')
btn.textContent = 'select'
btn.id = 'submit-btn'

form.appendChild(btn)

