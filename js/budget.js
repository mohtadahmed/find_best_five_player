
function getInputValue(inputFieldId) {
    const getInputValue = document.getElementById(inputFieldId);
    const getInputString = getInputValue.value;
    const inputValue = parseFloat(getInputString);
    
    return inputValue;
}



//  Add Event Handler to the Calculate Button
document.getElementById('btn-calculate').addEventListener('click', function(){
    const inputValue = getInputValue('player-amount-field');

    const playerExpenseField = document.getElementById('player-expense');
    playerExpenseField.innerHTML = inputValue;
});

// Add Event Handler to the Calculate Total Button
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerInputValue = getInputValue('input-manager-field');
    console.log(managerInputValue)
    
    const coachInputValue = getInputValue('input-coach-field');
    console.log(coachInputValue)
    
    // const perPlayerExpense = getInputValue('player-amount-field')
    const playerExpenseField = document.getElementById('player-expense');
    playerExpenseField.innerHTML = getInputValue('player-amount-field');
    console.log(playerExpenseField)

    const totalCost =  managerInputValue + coachInputValue + perPlayerExpense;
    console.log(totalCost)
})