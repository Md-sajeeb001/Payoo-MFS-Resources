document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const mobileInput = getInputValueById('mobile-number-field');
    const pinInput = getInputValueById('pin-number');

    if(pinInput === 1234 && mobileInput === 18){
        window.location = '/home.html'
    }
    else{
        alert("log in faield")
    }
})

