const apiKey = "070021f73a1136f2d7ce79add7bdf63f";

document.addEventListener("DOMContentLoaded", () => {
  const getWeatherButton = document.getElementById("getWeather");
  const cityInput = document.getElementById("cityInput");
  const weatherInfo = document.getElementById("weatherInfo");

  getWeatherButton.addEventListener("click", async () => {
    clearElement(weatherInfo);

    const city = cityInput.value.trim();

    if (!city) {
      showError("Please enter a city name.");
      return;
    }

    showLoadingSpinner();

    try {
      const data = await fetchWeatherData(city);
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      await preloadImage(iconUrl);

      displayWeatherData(data, iconUrl);
    } catch (error) {
      showError(error.message);
    }
  });

  async function fetchWeatherData(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found. Please check the name and try again.");
    }
    return await response.json();
  }

  function preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Failed to load weather icon."));
    });
  }

  function clearElement(element) {
    element.innerHTML = "";
  }

  function showLoadingSpinner() {
    clearElement(weatherInfo);

    const spinner = document.createElement("div");
    spinner.className = "custom-spinner";
    weatherInfo.appendChild(spinner);
  }

  function showError(message) {
    clearElement(weatherInfo);

    const errorText = document.createElement("p");
    errorText.textContent = `Error: ${message}`;
    errorText.style.textAlign = "center";
    errorText.classList.add("error");
    weatherInfo.appendChild(errorText);
  }

  function displayWeatherData(data, iconUrl) {
    clearElement(weatherInfo);

    const card = document.createElement("div");
    card.className = "weather-info fade-in";

    const icon = document.createElement("img");
    icon.src = iconUrl;
    icon.alt = data.weather[0].description;
    card.appendChild(icon);

    const location = document.createElement("h2");
    location.textContent = `${data.name}, ${data.sys.country}`;
    card.appendChild(location);

    const description = document.createElement("p");
    description.textContent = `${data.weather[0].main} - ${data.weather[0].description}`;
    card.appendChild(description);

    const temp = document.createElement("p");
    temp.textContent = `Temperature: ${data.main.temp}°C`;
    card.appendChild(temp);

    const feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels like: ${data.main.feels_like}°C`;
    card.appendChild(feelsLike);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    card.appendChild(humidity);

    const wind = document.createElement("p");
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    card.appendChild(wind);

    weatherInfo.appendChild(card);
  }
});
