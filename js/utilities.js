// Function for getting the value from an Input Field
function getInputValue(inputFieldId) {
    const getInputFieldValue = document.getElementById(inputFieldId);
    const getInputString = getInputFieldValue.value;
    const inputValue = parseFloat(getInputString);
    
    if(isNaN(inputValue) || inputValue <= 0){
        alert('Provide a valid and Positive Integer number please')
    }

    else{
        return inputValue;
    }
    
    return getInputFieldValue.value = '';
    
}

// Function for getting the Inner Text Value from a HTML Element
function getInnerTextFromId(fieldId) {
    const fieldElementByValue = document.getElementById(fieldId);
    const fieldValue = fieldElementByValue.innerText;

    return fieldValue;
}