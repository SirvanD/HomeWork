
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