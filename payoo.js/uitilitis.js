function getInputValueFieldById(id){
    const mobileNumber = document.getElementById(id).value;
    const mobConNum = parseFloat(mobileNumber);
    return mobConNum;
}

function getTextValueFieldById(id){
    const currentBalance = document.getElementById(id).innerText;
    const numberBalance = parseFloat(currentBalance);
    return numberBalance;
}

// hidden section

function getBtnHiddenValueById(id){
    document.getElementById('addMoneyBtn').classList.add('hidden');
    document.getElementById('addMoneyBtn').classList.add('CashOutBtn');
    document.getElementById('addMoneyBtn').classList.add('transferBtn');
    document.getElementById('addMoneyBtn').classList.add('bonusBtn');
    document.getElementById('addMoneyBtn').classList.add('PaybillBtn');
    document.getElementById('addMoneyBtn').classList.add('TransactionsBtn');

    // show section

    document.getElementById(id).classList.remove('hidden');
}