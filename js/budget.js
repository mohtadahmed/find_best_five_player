//  Add Event Handler to the Calculate Button
document.getElementById('btn-calculate').addEventListener('click', function(){
    // Get the Per Player Expense from the Per Player Expense Field
    const inputValue = getInputValue('player-amount-field');

    // Calculate the Total Expense of the Players
    const playerExpenseValue = inputValue * 5;

    // Set the Total Expense of the Players
    const playerExpenseField = document.getElementById('player-expense');
    playerExpenseField.innerHTML = playerExpenseValue;
});


// Add Event Handler to the Calculate Total Button
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    // Get the Expense value of the Manager
    const managerInputValue = getInputValue('input-manager-field');

    // Get the Expense value of the Coach
    const coachInputValue = getInputValue('input-coach-field');
    
    // Get the Player Total Expense from the Player Expense Field
    const playerExpenseString = getInnerTextFromId('player-expense');
    const playerTotalExpense = parseFloat(playerExpenseString);
    
    // Calculate total cost including Players, Manager and Coach
    const totalCost =  managerInputValue + coachInputValue + playerTotalExpense;

    // Set the total calculated value to the Total Cost Field
    const totalCostField = document.getElementById('total-cost-field');
    totalCostField.innerHTML = totalCost;
    
});