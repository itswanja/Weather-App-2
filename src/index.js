function fetchWeather(response) {
  let locationElement = document.querySelector("#location");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");

  let temperature = response.data.temperature.current;
  locationElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = `${Math.round(temperature)} &deg;C`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" />`;
}

function searchLocation(location) {
  let apiKey = "o644f30b4cbteb80ba67a353f5909861";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${location}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(fetchWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#locationInput");

  searchLocation(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
