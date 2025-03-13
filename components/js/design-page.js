const deviceTypeDisplay = document.getElementById('device-type');

// Display the selected device type
const selectedDevice = localStorage.getItem('selectedDevice');
deviceTypeDisplay.textContent = selectedDevice ? selectedDevice : 'Unknown Device';
