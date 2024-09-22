// Mock API URL (replace this with your actual API endpoint)
const API_URL = 'https://api.example.com/buses'; // Replace with your real API endpoint

// Function to fetch bus data
async function fetchBusData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const buses = await response.json();
        displayBuses(buses);
    } catch (error) {
        console.error('Error fetching bus data:', error);
        document.getElementById('bus-info').innerText = 'Failed to load bus data.';
    }
}

// Function to display bus information
function displayBuses(buses) {
    const busInfoDiv = document.getElementById('bus-info');
    busInfoDiv.innerHTML = ''; // Clear previous data

    if (buses.length === 0) {
        busInfoDiv.innerText = 'No buses currently available.';
        return;
    }

    buses.forEach(bus => {
        const busElement = document.createElement('div');
        busElement.cla
