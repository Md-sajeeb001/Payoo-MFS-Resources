document.getElementById('add-money-btn').addEventListener('click', function(event){

    event.preventDefault();

    const mobNumber = getInputValueFieldById('mobile-number-field')
    const pinNumber = getInputValueFieldById('pin-number')

    if(typeof mobNumber !== "number" && typeof pinNumber !== "number"){
        alert("Invalid Input")
    }


    if(pinNumber === 1234){
        window.location = '/home.html';
    }
    else {
        alert('Please Provid a Valid Input');
    }

});

document.getElementById('add-money-btn').addEventListener('click', function(){
      const amountNumber = getInputValueFieldById('amount-number');
      const pinNumber = getInputValueFieldById('pin-number');
      const currentBalance = getTextValueFieldById('current-balance');
      if(isNaN(amountNumber)){
        alert('Invalid Input')
        return;
      }

      if(pinNumber === 1234){
        const addingAmount = amountNumber + currentBalance;
        document.getElementById('current-balance').innerText = addingAmount;
      }
      else {
        alert(`Sorry We Can't Adding Your Money`)
      }


})