const displayData = (
  statusElement,
  status,
  cityElement,
  city,
  country,
  tempElement,
  temp,
  feelsLikeElement,
  feelsLike,
  windElement,
  wind,
  humidityElement,
  humidity,
) => {
  statusElement.textContent = status;
  cityElement.textContent = `${city}, ${country}`;
  tempElement.textContent = temp;
  feelsLikeElement.textContent = `Sensación térmica: ${feelsLike}`;
  windElement.textContent = `Viento: ${wind}`;
  humidityElement.textContent = `Humedad: ${humidity}`;
};

export default displayData;
