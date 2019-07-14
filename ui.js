class UI {
  constructor() {

    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.maxTemp = document.getElementById('w-maxtemp');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.description = document.getElementById('w-description');
    this.coords = document.getElementById('w-coords');
  }
  
  drawResults(weather) {
  this.location.textContent = weather.name;
  // TODO: Need to capitilize first letters of DESCRIPTION
  this.desc.textContent = `${weather.weather[0].description}`;
  this.string.textContent = `${Math.trunc(weather.main.temp)} °C`;
  this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
  this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
  this.maxTemp.textContent = `Max Temperature: ${Math.trunc(weather.main.temp_max)} °C`;
  this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
  this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  this.coords.textContent = `Geo Coords: ${weather.coord.lon}, ${weather.coord.lat}`;
  }

}