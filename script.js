
  

  function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
  
    // Replace 'YOUR_API_KEY' with the actual API key you obtained
    const apiKey = '70291402400d47c481d110737232306';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>Temperature: ${data.current.temp_c}°C</p>
      <p>Condition: ${data.current.condition.text}</p>
      <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;
  }
  