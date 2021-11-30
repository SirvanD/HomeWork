
    console.log('ga bank');

    var balSpan = document.querySelector('.bal-span');
    var withdrawBtn = document.querySelector('.withdraw-btn');
    var depositBtn = document.querySelector('.deposit-btn');
    var numInput = document.querySelector('.number-input');
    var container = document.querySelector('.container');
    var alertMsgBox = document.querySelector('.alert-msg-box');
    var numOfWithdrawal = 0;

    balSpan.textContent = 0;

    function displayAlertMsg() {
        alertMsgBox.textContent = 'Account charged $2 fee because you exceeded the 10 free withdrawal limit.';
        alertMsgBox.style.display = 'block';
        alertMsgBox.style.textDecoration = 'underline';
    }

    function disableAlertMsg() {
        alertMsgBox.style.display = 'none';
    }

    function updateBal(val) {
        return balSpan.textContent = val;
     }
    

    function withdraw() {
        var bal = Number(balSpan.textContent) - Number(numInput.value); 

        if (Number(numInput.value) > Number(balSpan.textContent)) {
            return 0;
        } else {
            updateBal(bal);

            if (Number(balSpan.textContent) == 0) {
                balSpan.style.backgroundColor = 'mistyrose';
            } 
        }  

        numOfWithdrawal = numOfWithdrawal + 1;

        // extension: check if exceeded the 10 free withdrawal limit - then charge $2 fee
        if (numOfWithdrawal > 10) {
            var bal = bal - 2;

            displayAlertMsg();

            updateBal(bal);    
        }

        alertMsgBox.addEventListener('click', disableAlertMsg);

        numInput.value = '';  

        //console.log('funct withdraw end');
    }

    function deposit() {
        var bal = Number(balSpan.textContent) + Number(numInput.value);

        updateBal(bal);

        if (Number(balSpan.textContent) > 0) {
            balSpan.style.backgroundColor = 'white';
        } 

        numInput.value = '';
    }

    withdrawBtn.addEventListener('click', withdraw);
    depositBtn.addEventListener('click', deposit);
    
    