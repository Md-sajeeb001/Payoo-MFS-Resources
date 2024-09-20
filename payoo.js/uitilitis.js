function getInputValueById(id){
    const getValue = document.getElementById(id).value;
    const getNumberValue = parseFloat(getValue);
    return getNumberValue;
}

function getTextValueById(id){
    const getTextValue = document.getElementById(id).innerText;
    const getTextNumValue = parseFloat(getTextValue);
    return getTextNumValue;
}

function showSectionById(id){
    document.getElementById('adding-money-forms').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
    
}