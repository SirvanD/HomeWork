console.log('Can i have hamburger please')


//creates the div element with class forms
var div = document.createElement("div")
div.classList.add('forms')
document.body.appendChild(div)
    //ends creating element

//creates a form, an input and a button
var form = document.createElement('form')
var formInput = document.createElement('input')
formInput.type = 'text'
formInput.name = 'color'
document.body.appendChild(form)
form.appendChild(formInput)
var button = document.createElement('button')
button.textContent = 'set color!'
form.appendChild(button)
    //end of forms creation

//creates event listener
// button.addEventListener('click', () => {
//     div.style.backgroundColor = `${formInput.name}`;
// })

//creates 2000 divs cause FML
for (let i = 0; i < 2000; i++) {

    var div2K = document.createElement('div')
    div2K.classList.add('pixels')
    document.body.appendChild(div2K)
}

button.addEventListener('click', () => {
    event.preventDefault();
    inputColor = formInput.value
    console.log(inputColor)
    div.style.backgroundColor = inputColor;
    pixel = document.querySelectorAll('.pixels')
    console.log(pixel)
    pixelColor()
})

function pixelColor() {
    pixel.forEach(box =>
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = inputColor;
        })
    )
};

//button 2 for omdb talking to database

var form2 = document.createElement("form2")
div.appendChild(form2)
var formInput2 = document.createElement("input")
form2.appendChild(formInput2)
formInput2.type = 'text'
formInput2.name = 'movie'
var button2 = document.createElement("button")
button2.textContent = 'movie background =)'
form2.appendChild(button2)

button2.addEventListener('click', (event) => {
    event.preventDefault()
    var inputMovie = formInput2.value
    console.log(inputMovie)
    axios.get(`https://omdbapi.com/?s=${inputMovie}&apikey=2f6435d9`).then(res => {
        var poster = res.data.Search[0].Poster
        console.log(poster)
        document.body.style.backgroundImage = `url(${poster})`
    })
});