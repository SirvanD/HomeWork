
const divContainer = document.createElement('div')
const brushBoxElement = document.createElement('div')
const form = document.createElement('form')
const select = document.createElement('select')
const colorBtn = document.createElement('button')
const movieInput = document.createElement('input')
const movieBtn = document.createElement('button')


//container style
divContainer.style.display= 'flex'
divContainer.style.flexWrap= 'wrap'
divContainer.style.gap= '1px'
document.body.style.overflow= 'hidden'


//appending elements
document.body.appendChild(brushBoxElement)
document.body.appendChild(divContainer)
brushBoxElement.appendChild(select)
brushBoxElement.appendChild(colorBtn)
brushBoxElement.appendChild(movieInput)
brushBoxElement.appendChild(movieBtn)
let bgColor = 'green'

//brushbox style
brushBoxElement.style.display= 'flex'
brushBoxElement.style.flexDirection='column'
brushBoxElement.style.position= 'absolute'
brushBoxElement.style.right= '0'
brushBoxElement.style.top= '0'
brushBoxElement.style.width= '150px'
brushBoxElement.style.height= '150px'
brushBoxElement.style.backgroundColor= 'black'
brushBoxElement.style.gap='10px'

//select style
select.style.width = '100px'
for(let i=0; i<2000; i++){
    const template = document.createElement('div')
    template.style.width= '30px'
    template.style.height= '30px'
    template.style.border= '1px solid grey'
    // template.style.border= '1px solid blue'
    template.style.display= 'block'
    template.className='pixel'
    divContainer.appendChild(template)
}

//colorBtn style
colorBtn.style.width= '50px'
colorBtn.style.height= '20px'
colorBtn.textContent= 'select'



//movie select style
movieInput.type = 'text'
movieInput.style.width = '100px'


//movieBtn style
movieBtn.style.width= '50px'
movieBtn.style.height= '20px'
movieBtn.textContent= 'select'


const colorArr= ['Select colour','blue', 'red', 'yellow', 'green']
colorArr.forEach(color => {
    const option = document.createElement('option')
    option.textContent = color
    select.appendChild(option)
})


const divColors = document.querySelectorAll('.pixel')

function handleColor(event) {
    clickedOn = event.target
    clickedOn.style.backgroundColor= bgColor
}

function handleColorChange() {
    console.log(document.querySelector('select').value)
    const value = document.querySelector('select').value
    bgColor = value
    console.log(bgColor)
}

function handleResponse(res) {
    console.log(res.data.Poster)
    document.body.style.backgroundImage= `url(${res.data.Poster})`
    document.body.style.backgroundSize= '70vh'
}

function handleMovieBg() {
    axios.get(`http://omdbapi.com/?t=${movieInput.value}&apikey=2f6435d9`).then(res => {
        console.log(res.data.poster)
        document.body.style.backgroundImage= `url(${res.data.Poster})`
    })
}



divColors.forEach(square => {
    square.addEventListener('mouseover', handleColor)
})
colorBtn.addEventListener('click', handleColorChange)

movieBtn.addEventListener('click', handleMovieBg)

axios.get('http://omdbapi.com/?t=jaws&apikey=2f6435d9').then(handleResponse)
