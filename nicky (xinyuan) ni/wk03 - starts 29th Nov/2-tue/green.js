var allBox = document.getElementsByClassName('box')

function handleClick(event) {
    console.log('clicked');
    var userClicked = event.target;
    userClicked.disabled = true;
    userClicked.style.backgroundColor = 'red';
}

for (var index = 0; index < allBox.length; index++){
    allBox[index].addEventListener('click', handleClick);
} 

var clickNum = 0;
document.body.onclick=function(){
    clickNum++;
    if (clickNum >= allBox.length){
    document.getElementsByClassName('box')[0].style.backgroundColor = 'green'
    document.getElementsByClassName('box')[1].style.backgroundColor = 'green'
    document.getElementsByClassName('box')[2].style.backgroundColor = 'green'
    }
}



//can't disable after clicked
