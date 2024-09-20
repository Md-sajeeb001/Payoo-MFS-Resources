// adding money

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const amounNumber = getInputValueById('Amount-input-field');
    const pinNumber = getInputValueById('amount-pin-number');
    if(isNaN(amounNumber)){
        alert('Invalid Input');
        return;
    }

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

document.getElementById('cashOut-money-btn').addEventListener("click", function(event){
    event.preventDefault();

    const cashOutAmount = getInputValueById('cashout-input-field');
    if(isNaN(cashOutAmount)){
        alert("invalid Input");
        return;
    }
    const cashOutPinNumber = getInputValueById('cashout-pin-number');
    const currentBalance = getTextValueById('current-balance');
    if(currentBalance < cashOutAmount){
        alert('You do not have enough money to cash out');
        return;
    }
    if(cashOutPinNumber === 1234){
        const cashOut = currentBalance - cashOutAmount;
        document.getElementById('current-balance').innerText = cashOut;
    }
    else{
        alert("Faield To Cash Out Money");
    }

})

// cash out money!

document.getElementById('cashOut-btn').addEventListener('click', function(){
    showSectionById('cashOut-forms');
});

document.getElementById('addMoney-btn').addEventListener('click', function(){
    showSectionById('adding-money-forms');
})