// Create a variable that selects the form
let formClass = document.querySelector(".form-class");

// Define what happens on form submission
function submitForm(event) {
  event.preventDefault();
  console.log(`Form submitted!`);
  // The name the user types into the form.
  const searchTerm = document.querySelector("[name=search]").value.replace(" ", "-");
  console.log(`The search terms are --> `, searchTerm);
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=YHVt9eBXlMp4ZaqRho7dxZkesu8t0Mcj&q=${searchTerm}&limit=10`).then((res) => {
    let divWrapper = document.querySelector(".giphy-wrapper");
    divWrapper.innerHTML = "";
    res.data.data.forEach((gif) => {
      console.log(gif.embed_url);
      let gifImage = document.createElement("img");
      gifImage.src = gif.images.original.url;
      divWrapper.appendChild(gifImage);
    });
  });
}

// Add the event listner to the form
formClass.addEventListener("submit", submitForm);
