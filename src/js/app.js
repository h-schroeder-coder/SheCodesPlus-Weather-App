function refreshWeather(response) {
  let currentTemperatureElement = document.querySelector(
    "#weather-app-temp-value"
  );
  let temp = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city-name");

  cityElement.innerHTML = response.data.city;
  currentTemperatureElement.innerHTML = Math.round(temp);
}

function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Fall Creek");
