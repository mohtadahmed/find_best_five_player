
function getInputValue(inputFieldId) {
    const getInputFieldValue = document.getElementById(inputFieldId);
    const getInputString = getInputFieldValue.value;
    const inputValue = parseFloat(getInputString);
    
    return inputValue;
}



//  Add Event Handler to the Calculate Button
document.getElementById('btn-calculate').addEventListener('click', function(){
    const inputValue = getInputValue('player-amount-field');
    const playerExpenseValue = inputValue * 5;

    const playerExpenseField = document.getElementById('player-expense');
    playerExpenseField.innerHTML = playerExpenseValue;
});

// Add Event Handler to the Calculate Total Button
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerInputValue = getInputValue('input-manager-field');
    
    
    const coachInputValue = getInputValue('input-coach-field');
    
    
    const playerExpenseField = document.getElementById('player-expense');
    const playerExpenseString = playerExpenseField.innerText;
    const playerTotalExpense = parseFloat(playerExpenseString);
    
    // Calculate total cost including Player, Manager and Coach
    const totalCost =  managerInputValue + coachInputValue + playerTotalExpense;


    const totalCostField = document.getElementById('total-cost-field');
    totalCostField.innerHTML = totalCost;
});