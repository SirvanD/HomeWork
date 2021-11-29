
    console.log('ga bank');

    var balSpan = document.querySelector('.bal-span');
    var withdrawBtn = document.querySelector('.withdraw-btn');
    var depositBtn = document.querySelector('.deposit-btn');
    var numInput = document.querySelector('.number-input');
    var container = document.querySelector('.container');


    balSpan.textContent = 0;


    // function bgcChange() {
    //     container.style.backgroundColor = 'mistyrose';
    // }

    function withdraw() {
        var bal = Number(balSpan.textContent) - Number(numInput.value);  

        if (Number(numInput.value) > Number(balSpan.textContent)) {
            return 0;
        } else {
            balSpan.textContent = bal;

            if (Number(balSpan.textContent) == 0) {
                balSpan.style.backgroundColor = 'mistyrose';
            } 
        }  

        numInput.value = '';
    }

    function deposit() {
        var bal = Number(balSpan.textContent) + Number(numInput.value);

        balSpan.textContent = bal;

        if (Number(balSpan.textContent) > 0) {
            balSpan.style.backgroundColor = 'white';
        } 

        numInput.value = '';
    }

    withdrawBtn.addEventListener('click', withdraw);
    depositBtn.addEventListener('click', deposit);
    
    