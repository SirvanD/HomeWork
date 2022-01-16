const CITIES = ["NYC", "SF", "LA", "SYD", "ATX"];
let option = document.createElement("option");

CITIES.forEach(city => {
    let dropdown = document.getElementById("city-type");
    let names = document.createElement('option')
    names.textContent = city
    dropdown.appendChild(names)
})



function backgroundImage(){
    let bodyImage = document.createElement("body").style.background
    if(city === "NYC") {
        bodyImage = url("../images/nyc.jpg");
    } else if (city === "SF") {
        bodyImage = url("../images/sf.jpg");
    } else if (city === "LA") {
            bodyImage = url('la.jpg');
    } else if (city === "SYD") {
        bodyImage = url('sydney.jpg');
    } else if (city === "ATX") {
        bodyImage = url('austin.jpg');
    } else {
        bodyImage = url("../images/citipix_skyline.jpg")
    }
}
// This is confusing the living daylights out of me, whyyy won't it work >:(