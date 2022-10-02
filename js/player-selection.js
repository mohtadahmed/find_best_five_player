// Function for Disabled the Select Button after selecting the Player
function buttonDisabled(buttonId){
    const playerSelectionButton = document.getElementById(buttonId);
    playerSelectionButton.disabled = true;
}

// Function for Selecting the Choosen Player and Adding them to the Selected List
function playerNameSelection(playerId){
    // Get the Player Value from the Onclick Function
    const playerName = getInnerTextFromId(playerId);

    // Get the List Value and set the selected player to the List
    const playersList = document.getElementById('players-list');

    if(playersList.childElementCount <= 4){
        let newPlayerName = document.createElement('li');
        newPlayerName.textContent = playerName;
        playersList.appendChild(newPlayerName);
    }
    else{
        alert('You have selected the best five players');
    }
    
}