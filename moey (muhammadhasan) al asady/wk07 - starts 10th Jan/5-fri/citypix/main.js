


// document.getElementById("#city-type").change(function(){

//     if( this.value == ".sydney" ){
//         document.body.style.backgroundColor = url(../images/syd.jpg);
//     } if( this.value == ".SF" ) {
//         document.body.style.backgroundColor = ("/images/");
//     } if( this.value == ".NYC" ) {
//         document.body.style.backgroundColor = ("/images/");
//     } if( this.value == ".LA" ) {
//         document.body.style.backgroundColor = ("/images/");

//     } if( this.value == ".ATX" ) {
//         document.body.style.backgroundColor = ("/images/");

//     }

// });

var selectEl = document.querySelector("#city-type");

const cities = ['nyc', 'sf', 'la', 'austin', 'sydney'];

for(let i = 0; i < cities.length; i++){
    var dropDownOptions = document.createElement("option")

    dropDownOptions.textContent = cities[i]
    dropDownOptions.value = cities[i]
    selectEl.appendChild(dropDownOptions)
} 

selectEl.addEventListener('change', () => {
    console.log(selectEl.value)
    document.body.className = selectEl.value
})

var form = document.querySelector('.my-form')

form.addEventListener('submit', event => {
    event.preventDefault()
    
    console.log('clicked')
})


// function changePic() {

//     if (selecEl.value == "nyc") {
//         document.body.style.backgroundColor = (Image());
//     } else if (selectEl.valuev == "sf") {
//         document.body.style.backgroundColor = (Image());
//     } else if (selectEl.valuev == "la") {
//         document.body.style.backgroundColor = (Image());
//     } else if (selectEl.valuev == "austin") {
//         document.body.style.backgroundColor = (Image());
//     } else if (selectEl.valuev == "sydney") {
//         document.body.style.backgroundColor = (Image());
//     } else {
//         document.body.style.backgroundColor = "white";

//     }
// }