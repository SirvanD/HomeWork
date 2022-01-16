
var cities =["NYC", "SF", "LA", "SYD", "ATX"];

cities.forEach (city => {
    var option =document.createElement('option');
    option.textContent = city; 
    document.getElementById("city-type").appendChild(option);
})

var cityChosen = document.getElementById("city-type");

cityChosen.addEventListener(
    'change',
    function() { change(this.id); },
    false
);

function change(){
    document.body.style.background = "url(images/" + cityChosen.value + ".jpg) no-repeat center center fixed";
}


