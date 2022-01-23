const giphyButton = document.querySelector('.giphy_btn');
const form1 = document.querySelector('.form1');
const input = document.querySelector('.giphy');
const giphyDiv = document.querySelector('.new-giphys');





// var userEntry = input





giphyButton.addEventListener("click", (event) => {  
    event.preventDefault()
    var giphyInput = document.querySelector('.giphy').value
    var api = `https://api.giphy.com/v1/gifs/search?api_key=6d2UzFaTrIGLwtSlzlSuw4e6aJZUqdX6&q=${input.value}&limit=10&offset=0&rating=g&lang=en`    
    axios.get(api)
        .then(res => {
            var allGiphys = res.data.data
            for (let i = 0;i < allGiphys.length; i++) {
                var finalData = allGiphys[i]['images']['original']['url']
                var giphyImg = document.createElement("img")
                giphyImg.className = "wow"
                console.log(giphyImg)
                giphyImg.src = finalData
                giphyDiv.appendChild(giphyImg)
            }
            // console.log(allGiphys)
            // var giphyUrl = res.data.data[0]['images']['original']['url']
            // document.body.style. = `url(${giphyUrl})`;
            // console.log(res.data.data[0]['images'])

        })     
  });


//   form1.addEventListener('submit', event => {
//     event.preventDefault()
    

// })