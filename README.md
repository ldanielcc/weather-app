# Weather App

A simple web application that allows users to get real-time weather information for any location by entering city, state, country, or ZIP code. This app uses the OpenWeatherMap API to fetch and display weather data. The project highlights key web development skills, such as working with APIs, handling user input, and managing DOM manipulation.

## Features
- **Search by City, State, Country, or ZIP Code**: Flexible input options allow users to specify a location.
- **Temperature Unit Toggle**: Switch between Celsius and Fahrenheit without making additional API calls.
- **Weather Details Display**: Shows the temperature and current weather description for the specified location.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the user interface and making it visually appealing.
- **JavaScript**: For handling user input, API requests, and updating the DOM.
- **OpenWeatherMap API**: Used to retrieve real-time weather data.

## How to Run the Project

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/weather-app.git
   ```
2. **Navigate to the Project Directory**:
   ```sh
   cd weather-app
   ```
3. **Open the HTML File**:
   Open `index.html` in your browser to run the application.

## Usage
1. Enter the **City**, **State** (optional), **Country** (optional), or **ZIP Code** in the input fields.
2. Click the **Get Weather** button to retrieve weather information.
3. Use the **temperature toggle** to switch between Celsius and Fahrenheit.

## Example
- **City**: Arcadia
- **State**: California
- **Country**: United States
- **ZIP Code**: 91007

Click **Get Weather** to see the temperature and weather conditions.

## API Key Setup
To use the OpenWeatherMap API, you'll need an API key:
1. Go to [OpenWeatherMap](https://openweathermap.org/api).
2. Sign up for a free account.
3. Obtain your API key from the dashboard.
4. Replace `'YOUR_API_KEY_HERE'` in `weather_app.js` with your actual API key.

## Project Structure
```
weather-app/
  ├── index.html
  ├── styles.css
  └── weather_app.js
```

## Code Breakdown
### HTML (`index.html`)
- Contains input fields for city, state, country, and ZIP code, along with a button to get weather data.
- Includes a checkbox to toggle between Celsius and Fahrenheit.

### CSS (`styles.css`)
- Styles the overall page layout, form elements, and the weather result display.

### JavaScript (`weather_app.js`)
- Handles user input, API calls, and updating the DOM.
- Includes functionality to toggle temperature units without re-fetching data.

## Learning Points
- **Working with APIs**: Understand how to make requests to external services and handle responses.
- **Asynchronous JavaScript**: Use **async/await** to manage asynchronous calls effectively.
- **DOM Manipulation**: Update the web page dynamically based on user input and fetched data.

## Future Improvements
- **Improved UI**: Add animations and enhance the layout for a more modern feel.
- **More Weather Details**: Display additional information, such as wind speed, humidity, and forecast.
- **Geolocation Feature**: Automatically get the user's current location to display weather data.

## Screenshots
![Weather App Screenshot]![image](https://github.com/user-attachments/assets/5dfb7588-8a51-48b8-85a1-8b44b1c0f62b)


## Contributing
Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request.

## License
This project is open source and available under the [MIT License](LICENSE).

