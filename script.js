const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check the weather for a given city
async function checkWeather(city) {
  // API key for OpenWeatherMap
  const apiKey = "78327fb5670a2d0a095958980ff05ce5";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${apiKey}`;

  // Send a request to the OpenWeatherMap API
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Check the response status
  if (response.status == 404) {
    // Display an error message if the city is not found
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    // Display weather data if the city is found
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

    // Set the weather icon based on the weather condition
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/Snow.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

// Add an event listener to the search button
searchBtn.addEventListener("click", () => {
  // Get the city entered by the user and check the weather
  const city = searchBox.value;
  checkWeather(city);
});
