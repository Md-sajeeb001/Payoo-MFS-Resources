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

        // transaction
        const ptag = document.createElement('p');
        ptag.innerText = `Added Balance : ${amounNumber} tk. New Balance ${addingBalance}`;
        document.getElementById('transaction-form').appendChild(ptag);
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

        // transaction
        const divTag = document.createElement('div');
        divTag.innerText = `
           
            <p>current Balance : ${currentBalance} tk. cash Out Amount: ${cashOut}</p>

        `
        document.getElementById('transaction-form').appendChild(divTag);

    }
    else{
        alert("Faield To Cash Out Money");
    }

})

// transaction-form section!



// cash out money event handelar!

document.getElementById('cashOut-btn').addEventListener('click', function(){
    showSectionById('cashOut-forms');
});

document.getElementById('addMoney-btn').addEventListener('click', function(){
    showSectionById('adding-money-forms');
})

document.getElementById('Transactions-btn').addEventListener('click', function(){
    showSectionById('transaction-form');
})