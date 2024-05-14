const apiKEY = "6cae7396c623e36e8ef959f0aee81368";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-box img");

async function checkWeather(cityName) {
    const response = await fetch(apiURL + cityName + `&appid=${apiKEY}`)
    var data = await response.json();


    if (!response.ok) {

        weatherIcon.style.width = "87%";
        weatherIcon.src = "images/errormeme.jpeg"; 
        
        document.querySelector(".temperature").innerHTML = '0°C';
        document.querySelector(".description").innerHTML = "Enter correct location";
        document.querySelector(".humidaty-in-pren").innerHTML = 0;
        document.querySelector(".windSpeed").innerHTML = 0;


    } else { 

        weatherIcon.style.width = "60%";
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".description").innerHTML = data.name;
        document.querySelector(".humidaty-in-pren").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/hr";
    }


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else {
        weatherIcon.src = "images/snow.png";
    } 

    document.querySelector(".hide").style.display = "block";
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
