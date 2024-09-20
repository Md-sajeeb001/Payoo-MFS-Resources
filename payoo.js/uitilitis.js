function getInputValueById(id){
    const getValue = document.getElementById(id).value;
    const getNumberValue = parseFloat(getValue);
    return getNumberValue;
}