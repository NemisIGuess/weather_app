import getWeatherData from './api-module';
import displayData from './display-module';

const App = (() => {
  const form = document.querySelector('form');
  const weatherStatus = document.querySelector('.weatherStatus');
  const city = document.querySelector('.city');
  const temp = document.querySelector('.degrees');
  const feelsLike = document.querySelector('.thermicSensation');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const errorMsg = document.querySelector('.errorMsg');
  let weatherData;

  form.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      weatherData = await getWeatherData(form.search.value, errorMsg);
      displayData(
        weatherStatus,
        weatherData.weather[0].description,
        city,
        weatherData.name,
        weatherData.sys.country,
        temp,
        weatherData.main.temp.toFixed(0),
        feelsLike,
        weatherData.main.feels_like.toFixed(0),
        wind,
        weatherData.wind.speed,
        humidity,
        weatherData.main.humidity,
      );
    } catch (error) {
      errorMsg.classList.add('visible');
      setTimeout(() => {
        errorMsg.classList.remove('visible');
        errorMsg.classList.add('hidden');
      }, 1500);
      throw new Error(error);
    }
  });
})();
