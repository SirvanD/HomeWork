
const divContainer = document.createElement('div')
const brushBoxElement = document.createElement('div')
const form = document.createElement('form')
const select = document.createElement('select')

const colorBtn = document.createElement('button')

divContainer.style.display= 'flex'
divContainer.style.flexWrap= 'wrap'
document.body.style.overflow= 'hidden'
document.body.appendChild(brushBoxElement)
document.body.appendChild(divContainer)
brushBoxElement.appendChild(select)
brushBoxElement.appendChild(colorBtn)
divContainer.stlye

let bgColor = 'green'

//brushbox style
brushBoxElement.style.display= 'flex'
brushBoxElement.style.flexDirection='column'
brushBoxElement.style.position= 'absolute'
brushBoxElement.style.right= '0'
brushBoxElement.style.top= '0'
brushBoxElement.style.width= '100px'
brushBoxElement.style.height= '100px'
brushBoxElement.style.backgroundColor= 'black'
brushBoxElement.style.gap='10px'

//select style
select.style.width = '100px'
for(let i=0; i<2000; i++){
    const template = document.createElement('div')
    template.style.width= '30px'
    template.style.height= '30px'
    // template.style.border= '1px solid blue'
    template.style.display= 'block'
    template.className='pixel'
    divContainer.appendChild(template)
}

//colorBtn style
colorBtn.style.width= '50px'
colorBtn.style.height= '20px'
colorBtn.textContent= 'select'


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
    // document.body.style.backgroundPositionY= 'center'
    document.body.style.backgroundSize= '70vh'
}

divColors.forEach(square => {
    square.addEventListener('mouseover', handleColor)
})
colorBtn.addEventListener('click', handleColorChange)

axios.get('http://omdbapi.com/?t=jaws&apikey=2f6435d9').then(handleResponse)