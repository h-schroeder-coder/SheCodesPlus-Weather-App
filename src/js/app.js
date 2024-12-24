function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-element");
  let cityElement = document.querySelector("#weather-app-city-name");

  cityElement.innerHTML = searchInput.value;
  
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
