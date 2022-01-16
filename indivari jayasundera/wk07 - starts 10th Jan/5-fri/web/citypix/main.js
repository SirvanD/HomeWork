var city = document.getElementById("city-type");

// var city = document.querySelector("select");

var option1 = document.createElement("option");
option1.value = "NYC";
option1.text = "NYC";
city.options.add(option1);

var option2 = document.createElement("option");
option2.text = "SF";
option2.value = "SF";
city.options.add(option2);

var option3 = document.createElement("option");
option3.value = "LA";
option3.text = "LA";
city.appendChild(option3);

var option4 = document.createElement("option");
option4.value = "SYD";
option4.text = "SYD";
city.appendChild(option4);

var option5 = document.createElement("option");
option5.value = "ATX";
option5.text = "ATX";
city.appendChild(option5);

function changeBackground() {
  var selectedValue = city.options[city.selectedIndex].value;

  if (selectedValue === "NYC") {
    document.body.className = "nyc";
  } else if (selectedValue === "SF") {
    document.body.className = "sf";
  } else if (selectedValue === "LA") {
    document.body.className = "la";
  } else if (selectedValue === "SYD") {
    document.body.className = "sydney";
  } else if (selectedValue === "ATX") {
    document.body.className = "austin";
  }
}

city.addEventListener("change", changeBackground);
