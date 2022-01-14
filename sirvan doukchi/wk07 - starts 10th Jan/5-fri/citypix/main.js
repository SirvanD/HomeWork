var section = document.getElementById("city-type");
var body = document.querySelector("body");

var cities = ["NYC", "SF", "LA", "SYD", "ATX"];

cities.forEach((city) => {
  var option = document.createElement("option");

  option.textContent = city;
  option.value = city;
  value = option.value;

  section.appendChild(option);
});

var options = document.getElementById("city-type").value;
console.log(options);

function show() {
  var section = document.getElementById("city-type");
  let value = section.options[section.selectedIndex].value;
  let text = section.options[section.selectedIndex].text;

  if (value == "NYC") {
    body.classList.remove("sf");
    body.classList.remove("sydney");
    body.classList.remove("austin");
    body.classList.remove("la");
    body.classList.add("nyc");
  } else if (value == "SF") {
    body.classList.remove("nyc");
    body.classList.remove("sydney");
    body.classList.remove("austin");
    body.classList.remove("la");
    body.classList.add("sf");
  } else if (value == "LA") {
    body.classList.remove("sf");
    body.classList.remove("sydney");
    body.classList.remove("austin");
    body.classList.remove("nyc");
    body.classList.add("la");
  } else if (value == "SYD") {
    body.classList.remove("sf");
    body.classList.remove("nyc");
    body.classList.remove("austin");
    body.classList.remove("la");
    body.classList.add("sydney");
  } else if (value == "ATX") {
    body.classList.remove("sf");
    body.classList.remove("sydney");
    body.classList.remove("nyc");
    body.classList.remove("la");
    body.classList.add("austin");
  } else {
    body.classList.remove("sf");
    body.classList.remove("nyc");
    body.classList.remove("austin");
    body.classList.remove("la");
    body.classList.remove("sydney");
  }

  console.log(value, text);
}
section.onchange = show;
show();
