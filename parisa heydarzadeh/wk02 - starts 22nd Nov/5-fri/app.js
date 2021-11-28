document.querySelector("#sun").textContent = "cheese";


document.querySelector("h1").textContent = "do not change any html code";


document.querySelector("#mercury").textContent = 5;


document.querySelector("#mars").textContent = "20";


document.queryselectorAll(".jupiter")[1].style.color = "purple";


function incrementFavNumber (){
    document.querySelector("#mars")++
}

document.querySelector(".plus-one-btn").addEventListener("click", incrementFavNumber);


document.querySelector(".saturn").value = "sega saturn";

document.querySelector("#pluto").className = "dwarf-planet";

function PlutoChangeColor() {
  document.querySelector("#pluto").style.backgroundColor = "tomato";
}
document
  .querySelector(".tomato-color-btn")
  .addEventListener("click", PlutoChangeColor);
