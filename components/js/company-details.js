const companyNameInput = document.getElementById('company-name');
const playerNameInput = document.getElementById('player-name');
const submitNameBtn = document.getElementById('submit-details');

// Submit Name button click
submitNameBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    const companyName = companyNameInput.value.trim();

    if (playerName && companyName) {
        localStorage.setItem('playerName', playerName); // Store the player name
        localStorage.setItem('companyName', companyName); // Store the company name
        window.location.href = 'ChooseComponent.html'; // Navigate to the device selection page
    } else {
        alert('Please enter all the Details.');
    }
});