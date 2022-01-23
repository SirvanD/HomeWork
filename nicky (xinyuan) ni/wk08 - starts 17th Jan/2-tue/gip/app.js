
const imageBtn = document.querySelector('.image-btn');
const resetBtn = document.querySelector('.reset-btn');
const section = document.querySelector('section');

imageBtn.addEventListener('click', () => {
    for(var index = 0; index < 10; index ++){
        var imageChosen = 'https://api.giphy.com/v1/gifs/random?api_key=tnr6lyEssumTSj3slO0KcxZx4JgdzTlb&tag=' + document.querySelector('.image').value + '&rating=g';
      
        axios.get(imageChosen).then(res => {
            console.log(res.data.data.images.original.url)
            let img = document.createElement('img')
            img.src = res.data.data.images.original.url
            section.appendChild(img)
       
        })  
    }   
})



resetBtn.addEventListener('click', reset)
function reset(){
    location.reload();
}



