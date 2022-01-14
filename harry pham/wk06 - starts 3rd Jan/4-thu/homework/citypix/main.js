const select = document.querySelector('select')
const form = document.querySelector('form')
const body = document.querySelector('body')
const options = document.querySelector('select option')
const nyc = document.createElement('option')
const sf = document.createElement('option')
const la = document.createElement('option')
const austin = document.createElement('option')
const sydney = document.createElement('option')


const cities = ['New York City', 'San Francisco', 'Los Angelos', 'Austin', 'Sydney']
const cityImg = ['nyc', 'sf', 'la', 'austin', 'sydney']

cities.forEach(city => {
    const option = document.createElement('option')
    option.textContent = city
    select.appendChild(option)
})

// nyc.textContent = cities[0]
// select.appendChild(nyc)

// sf.textContent = cities[1]
// select.appendChild(sf)

// la.textContent = cities[2]
// select.appendChild(la)

// austin.textContent = cities[3]
// select.appendChild(austin)

// sydney.textContent = cities[4]
// select.appendChild(sydney)

// body.style.backgroundImage = `url(./images/nyc.jpg)`


const btn = document.createElement('button')
btn.textContent = 'select'
btn.id = 'submit-btn'
form.appendChild(btn)

