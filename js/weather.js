import apikey from './apikey.js';

const API_KEY = apikey;

function getWeather() {
  return navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(1);
      const lon = position.coords.longitude.toFixed(1);
      console.log(lat, lon);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
      ).then(async (response) => {
        const res = await response.json();
        console.log(res);

        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerHTML = res.name;
        weather.innerHTML = `${res.weather[0].description} / ${parseInt(res.main.temp)}`;
      });
    },
    () => {
      alert('위치 정보를 받을 수 없습니다.');
    }
  );
}

getWeather();
