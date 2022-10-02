function buttonDisabled(buttonId){
    const playerSelectionButton = document.getElementById(buttonId);
    playerSelectionButton.disabled = true;
}

function playerNameSelection(playerId){
    const playerNameValue = document.getElementById(playerId);
    const playerName = playerNameValue.innerText;

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