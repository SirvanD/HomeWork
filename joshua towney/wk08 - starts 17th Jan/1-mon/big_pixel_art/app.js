const btn1 = document.querySelector('.color_pick_btn');
const btn2 = document.querySelector('.movie_btn')
const section = document.querySelector('section');
let pixel = '';
let inputColor = '';
let inputMovie = '';

for(i = 0; i < 2000; i++) {
    let div = document.createElement('div');
    div.className = 'pixel';
    section.appendChild(div);
}; 

btn1.addEventListener('click', (event) => {
    event.preventDefault(); //stop form submitting
    inputColor = document.querySelector('.color_text').value;
    document.querySelector('.color_box').style.backgroundColor = inputColor;
    pixel = document.querySelectorAll('.pixel');
    activatePixelListener(); // needed this otherwise querySelector all only picked up the originalpixwl that was on the page
});

function activatePixelListener() {
    pixel.forEach(pix => 
        pix.addEventListener('mouseover',() => {
            pix.style.backgroundColor = inputColor;
        })
    )
};

btn2.addEventListener('click', (event) => {
    event.preventDefault();
    inputMovie = document.querySelector('.movie_text').value;
    axios.get(`https://omdbapi.com/?s=${inputMovie}&apikey=ebc931bb`).then(res => {
        let poster = res.data.Search[0].Poster;
        console.log(poster);
        document.body.style.backgroundImage = `url(${poster})`;
})});