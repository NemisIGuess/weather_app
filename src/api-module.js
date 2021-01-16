const apiKey = 'e2e40ef3cc9f5b49c78dc930972c2548';
const getWeatherData = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`,
    { mode: 'cors' },
  );
  const data = await response.json();
  return data;
};

export default getWeatherData;
