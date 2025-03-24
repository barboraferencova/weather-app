const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const apiKey = "e40cbf15fd022fd8a0e3dcb6fc083079"

// button.addEventListener("click", function () {
//     console.log("Kliknuto");
//     console.log(input.value);
    
// })

const city = "Prague";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
      const cityName = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;

    console.log(`Počasí v ${cityName}:`);
    console.log(`Teplota: ${temp}°C`);
    console.log(`Popis: ${description}`);
    })
    .catch(error => {
      console.error("Chyba při načítání dat:", error);
    });