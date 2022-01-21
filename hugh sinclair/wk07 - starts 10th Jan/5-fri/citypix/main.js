var cityType = document.querySelector('#city-type')

var option = document.createElement('option')
var options = document.querySelectorAll('option')


let cityNames = [['NYC', "New York City"],['SF', 'San Fransico'], ['LA', 'Los Angeles'], ['sydney', 'Sydney'], ['austin', 'Austin']]


cityNames.forEach(name => {
    var option = document.createElement('option')
    option.textContent = name[1]
    option.value = name[0] //this makes more sense if the value is different from the text content, so lke value is "new york" not NYC
    cityType.appendChild(option)
})

const handleChange = event => {
    event.preventDefault()
    document.body.className = cityType.value.toLowerCase()
}


cityType.addEventListener('change', handleChange)



// if you used a button
// var btn = document.querySelector('button')
// btn.addEventListener('click', handleClick)
// const handleClick = event => {
//     event.preventDefault()

// }