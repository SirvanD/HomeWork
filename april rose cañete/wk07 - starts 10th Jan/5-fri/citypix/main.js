
const cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX']

let selectTag = document.querySelector('#city-type')
let selectOpts = selectTag.options

cities.forEach(city => {
    selectTag.add(new Option(city))
})

function updateBackgroundImg() {
    let selectedOption = this.value
    
    if (selectedOption == 'SYD') {
        document.body.className = 'sydney'
    } else if (selectedOption == 'NYC') {
        document.body.className = 'nyc'
    } else if (selectedOption == 'SF') {
        document.body.className = 'sf'
    } else if (selectedOption == 'LA') {
        document.body.className = 'la'
    } else {
        document.body.className = 'austin'
    }
}

selectTag.addEventListener('change', updateBackgroundImg)