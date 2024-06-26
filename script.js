document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weather-description').textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
