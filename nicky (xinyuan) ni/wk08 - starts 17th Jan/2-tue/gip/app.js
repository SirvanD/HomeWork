
const imageBtn = document.querySelector('.image-btn');
const resetBtn = document.querySelector('.reset-btn');
const section = document.querySelector('section');

imageBtn.addEventListener('click', () => {
    for(var index = 0; index < 10; index ++){
        var imageChosen = 'https://api.giphy.com/v1/gifs/random?api_key=tnr6lyEssumTSj3slO0KcxZx4JgdzTlb&tag=' + document.querySelector('.image').value + '&rating=g';
        console.log(imageChosen);
        axios.get(imageChosen).then(res => {
            console.log(res.data.data.embed_url)
            // let img = document.createElement('img')
            // img.scr = res.data.data.embed_url
            // section.appendChild(img)
            var a = document.createElement('a');
            var link = document.createTextNode("Image");
            a.appendChild(link);
            a.href = res.data.data.embed_url
            section.appendChild(a);
        })  
    }   
})



resetBtn.addEventListener('click', reset)
function reset(){
    location.reload();
}



