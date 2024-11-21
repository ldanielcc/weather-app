// API details
const apiKey = 'YOUR_API_KEY_HERE'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function getWeather(city, state, country, zip) {
    let query = `q=${city}`;
    if (state) query += `,${state}`;
    if (country) query += `,${country}`;
    if (zip) query = `zip=${zip}`;

    try {
        const response = await fetch(`${apiUrl}?${query}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerText = error.message;
    }
}

// Function to display weather data
let currentTempUnit = 'C';
let currentWeatherData = null;

function displayWeather(data) {
    currentWeatherData = data;
    updateWeatherDisplay();
}

function updateWeatherDisplay() {
    if (!currentWeatherData) return;

    const { name, main, weather } = currentWeatherData;
    const temperature = currentTempUnit === 'C' ? main.temp : (main.temp * 9/5) + 32;
    const tempUnit = currentTempUnit === 'C' ? '°C' : '°F';

    document.getElementById('weather-result').innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature.toFixed(1)}${tempUnit}</p>
        <p>Weather: ${weather[0].description}</p>
    `;
}


// Add event listener to the button
window.onload = function() {
    document.getElementById('getWeatherButton').addEventListener('click', () => {
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        const zip = document.getElementById('zip').value;

        if (city || zip) {
            getWeather(city, state, country, zip);
        } else {
            document.getElementById('weather-result').innerText = 'Please enter a city name or ZIP code';
        }
    });

    document.getElementById('toggleTempUnit').addEventListener('change', () => {
        currentTempUnit = currentTempUnit === 'C' ? 'F' : 'C';
        updateWeatherDisplay();
    });
};
