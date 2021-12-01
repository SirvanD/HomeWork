//tag selectors
var allBoxes = document.querySelectorAll("section > div")
var boxOne = document.querySelector(".box1")
var boxTwo = document.querySelector(".box2")
var boxThree = document.querySelector(".box3")


//functions

//
function handleColor(event) {
    let clicked = event.target
    clicked.style.backgroundColor = "red"
    if(boxOne.style.backgroundColor == "red" && boxTwo.style.backgroundColor == "red" && boxThree.style.backgroundColor == "red")   {
        for(var i=0; i<allBoxes.length;i++ )    {
            allBoxes[i].style.backgroundColor="green"
        }   
    }
}



//callbacks
allBoxes.forEach(function(box)  {
    box.addEventListener("click", handleColor)
})