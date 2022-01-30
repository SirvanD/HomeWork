var boxes = document.querySelectorAll("div")

function turnRed(event) {
    var onclick = event.target;
    onclick.style.backgroundColor = "red"
    if (boxes[0].style.backgroundColor == "red" && boxes[1].style.backgroundColor == "red" && boxes[2].style.backgroundColor == "red") {
        boxes.forEach(function(box){
            box.style.backgroundColor = "green"
        })
    }
}

boxes.forEach(function(box){
    box.addEventListener("click", turnRed)
})

