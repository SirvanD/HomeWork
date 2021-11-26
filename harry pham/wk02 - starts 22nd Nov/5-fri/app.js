function handleClick() {
    console.log("clicked");
}

function handleMouseMove() {
    console.log('mouse moved');
}

function handleScroll() {
    console.log("scroll")
}

function handleKeyPress() {
    console.log("keypress")
}

window.addEventListener("click", handleClick);
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("scroll", handleScroll);
window.addEventListener("keypress", handleKeyPress);