
let API_KEY = 'XbVu24ZZ9SsQZQgkeLMua2x7q4Glq6yk'


// const btn = document.querySelector('button')
const form = document.querySelector('form')


function handleResponse(res) {
    // console.log(res.data.data);
    let div = document.createElement('div')

    document.body.appendChild(div)

    let result = res.data.data

    result.forEach(item => {
        let img = document.createElement('img')
        
        img.style.display = 'block'
        img.src = item.embed_url

        div.appendChild(img)

    });
}

function handleSubmit(event) {
    event.preventDefault();

    let userSearched = document.querySelector('input').value

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${userSearched}&api_key=${API_KEY}&limit=10`).then(handleResponse)

}

form.addEventListener('submit', handleSubmit)