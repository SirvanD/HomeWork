document.getElementById('searchbtn').addEventListener('click', () => {
    let result = document.getElementById('search').value;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=E2GwON4qS6ODl2ocLOTLUc0aViCwDXzX&q=${result}&limit=10&offset=0&rating=g&lang=en
    `).then(res => {
        for (let i = 0; i < 10; i++) {
            let searchResults = document.createElement('img')
            searchResults.src = res.data.data[i].images.downsized_large.url
            document.querySelector('.result-area').appendChild(searchResults)
        }
    })
})