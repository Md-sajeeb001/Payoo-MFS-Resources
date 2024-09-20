// adding money

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const amounNumber = getInputValueById('Amount-input-field');
    const pinNumber = getInputValueById('amount-pin-number');

    if(pinNumber === 1234){
        const textValue = getTextValueById('current-balance');
        const addingBalance = amounNumber + textValue ;
        document.getElementById('current-balance').innerText = addingBalance;
    }
    else{
        alert('Field Money Adding');
    }

});

// cash out money!

document.getElementById('cashOut-btn').addEventListener('click', function(){
    showSectioById('cashOut-forms');
})