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
    this.coords = document.getElementById('w-coords');
  }
    
  
  drawResults(weather) {
  this.location.textContent = weather.name;
  this.desc.textContent = weather.description;
  this.string.textContent = weather.main.temp + "°C";
  this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
  this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
  this.maxTemp.textContent = `Max Temperature: ${weather.main.temp_max}`;
  this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
  this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  this.coords.textContent = `Geo Coords: ${weather.coord.lon}, ${weather.coord.lat}`;
  }

}