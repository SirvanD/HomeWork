const cities = [
    "NYC",
    "SF",
    "LA",
    "SYD",
    "ATX"
]

const select = document.querySelector("#city-type");

cities.forEach(city => {
    let option = document.createElement("option");
    option.textContent = city;
    option.value = city;
    select.appendChild(option);
})

// I renamed the styles in the CSS, I hope that's ok. Happy to try again if it's not a good way to do it. 

const options = document.querySelectorAll("option");
const body = document.querySelector("body");

// I wouldn't use the removeAttribute class if the body already had multiple classes attached to it, but here it seems ok. 

select.addEventListener("change", (event) => {
    if (body.classList.length > 0) {
        body.removeAttribute("class");
    }
    let city = (event.target.value).toLowerCase();
    body.classList.add(`${city}`);
});




