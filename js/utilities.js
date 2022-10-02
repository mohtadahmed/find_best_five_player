// Function for getting the value from an Input Field
function getInputValue(inputFieldId) {
    const getInputFieldValue = document.getElementById(inputFieldId);
    const getInputString = getInputFieldValue.value;
    const inputValue = parseFloat(getInputString);
    
    if(isNaN(inputValue)){
        alert('Provide a valid number please')
    }

    else{
        return inputValue;
    }
    
}

// Function for getting the Inner Text Value from a HTML Element
function getInnerTextFromId(fieldId) {
    const fieldElementByValue = document.getElementById(fieldId);
    const fieldValue = fieldElementByValue.innerText;

    return fieldValue;
}