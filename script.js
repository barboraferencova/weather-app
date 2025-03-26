
const button = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const apiKey = "e40cbf15fd022fd8a0e3dcb6fc083079";
const weatherInfo = document.querySelector(".weather-info");

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const cityName = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;

      weatherInfo.innerHTML = 
      `
      <h2> Weather in: ${cityName}</h2>
      <p> Temperature: ${temp} </p>
      <p> ${description}</p>
      `
    })
    .catch(error => {
      console.error("Error - data not loaded:", error);
    });
}

button.addEventListener("click", function () {
  const city = cityInput.value.trim(); 
  if (city) {
    getWeather(city);
  } else {
    console.log("Please enter a name of a city");
  }
});
