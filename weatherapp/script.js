function getCityName(city) {
  const cityname = document.getElementById('city').value;
  document.getElementById('app').innerHTML = '';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=3b0ea15b9f2e1f07e3da6d57add9f7a9`)
  .then(response => response.json())
    .then(data => {
    const today = new Date()
    const todaydate = today.getDate();
    const monthsarr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const todayMonth = monthsarr[today.getMonth()];
    const weather = data;
    const cityName = weather.name;
    const cityTemp = weather.main.temp;
    const cityHumidity = weather.main.humidity;
    const cityCountry = weather.sys.country;
    const cityWeather = weather.weather[0].main;
    const cityWeatherIcon = weather.weather[0].icon;
    let id = parseInt(weather.weather[0].id);
    let img = '';
    if (id >= 200 && id < 232) {
      console.log('jo')
      img = 'assets/media/thunderstorm.png'
    }
    else if (id >= 300 && id < 332) {
      img = 'assets/media/drizzle.png'
    }
    else if (id >= 500 && id < 535) {
      img = 'assets/media/rain.png'
    }
    else if (id >= 600 && id < 635) {
      img = 'assets/media/snow.png'
    }
    else if (id >= 700 && id < 806) {
      img = 'assets/media/cloudy.png'
    }
    const cityWindSpeedValue = weather.wind.speed;
    const div = document.createElement('div');
    div.innerHTML = ` <div class="container">
    <div class="today--city">
      <p class="today">Today ${todaydate} ${todayMonth}</p>
      <p class="city">${cityName} | ${cityCountry}</p>
    </div>
    <div class="weather--temp">
<img src=${img}></img>
      <p class="weather">${cityWeather} <img src=http://openweathermap.org/img/wn/${cityWeatherIcon}.png></p>
      <p class="temp">${cityTemp} &#778;</p>
    </div>
    <div class="wind--humidity">
      <p class="wind">💨 ${cityWindSpeedValue} km/h</p>
      <p class="humidity">💧 ${cityHumidity}%</p>
    </div>
  </div>`;
    document.getElementById('app').appendChild(div);
    const box = document.createElement('div');
  });
}