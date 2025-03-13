const chooseMobileBtn = document.getElementById('choose-mobile');
const chooseWatchBtn = document.getElementById('choose-watch');
const chooseTabletBtn = document.getElementById('choose-tablet');

// Choose device button click events
chooseMobileBtn.addEventListener('click', () => {
    localStorage.setItem('selectedDevice', 'Mobile Phone');
    window.location.href = 'DesignPageMobile.html'; // Navigate to design page
});
chooseWatchBtn.addEventListener('click', () => {
    localStorage.setItem('selectedDevice', 'Smart Watch');
    window.location.href = 'DesignPageSmartWatch.html'; // Navigate to design page
});
chooseTabletBtn.addEventListener('click', () => {
    localStorage.setItem('selectedDevice', 'Tablet');
    window.location.href = 'DesignPageTablet.html'; // Navigate to design page
});
