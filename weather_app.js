// API details
const apiKey = '2899188c9e34b7799c8f93e6c91420da '; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerText = error.message;
    }
}

// Function to display weather data
function displayWeather(data) {
    const { name, main, weather } = data;
    document.getElementById('weather-result').innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
    `;
}

// Add event listener to the button
window.onload = function() {
    document.getElementById('getWeatherButton').addEventListener('click', () => {
        const city = document.getElementById('city').value;
        if (city) {
            getWeather(city);
        } else {
            document.getElementById('weather-result').innerText = 'Please enter a city name';
        }
    });
};