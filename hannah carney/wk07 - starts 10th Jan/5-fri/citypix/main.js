const CITIES = ["NYC", "SF", "LA", "SYD", "ATX"];
let option = document.createElement("option");

CITIES.forEach(city => {
    let dropdown = document.getElementById("city-type");
    let names = document.createElement('option')
    names.textContent = city
    dropdown.appendChild(names)
})



// option.addEventListener('click', () => {
//     let bodyImage = document.body.style.backgroundImage
//     let cityname = document.getElementById("city-type").textContent
//     // names.textContent = city
//     if(cityname === "NYC") {
//         bodyImage = "url('../images/nyc.jpg')";
//     } else if (cityname === "SF") {
//         bodyImage = 'url("../images/sf.jpg")';
//     } else if (cityname === "LA") {
//         bodyImage = "url('la.jpg')";
//     } else if (cityname === "SYD") {
//         bodyImage = "url('la.jpg')"
//     } else if (cityname === "ATX") {
//         bodyImage = "url('la.jpg')"
//     } else {
//         bodyImage = 'url("../images/citipix_skyline.jpg")'
//     }
// }

// This is confusing the living daylights out of me, whyyy won't it work >:(
