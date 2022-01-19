document.getElementById('searchbtn').addEventListener('click', () => {
    let userInput = document.getElementById('search').value;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=E2GwON4qS6ODl2ocLOTLUc0aViCwDXzX&q=${userInput}&limit=10&offset=0&rating=g&lang=en
    `).then(res => {
        for (let i = 0; i < 10; i++) {
            let searchResult = document.createElement('img')
            searchResult.src = res.data.data[i].images.downsized_large.url
            document.querySelector('.result-area').appendChild(searchResult)
        }
    })
})