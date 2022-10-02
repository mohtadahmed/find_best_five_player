function playerNameSelection(playerId){
    const playerNameValue = document.getElementById(playerId);
    const playerName = playerNameValue.innerText;

    const playersList = document.getElementById('players-list');
    let newPlayerName = document.createElement('li');
    newPlayerName.textContent = playerName;
    playersList.appendChild(newPlayerName);
}