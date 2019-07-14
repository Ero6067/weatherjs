// Init weather obj
const weather = new Weather('Vancouver');

// Get weather on DOM load
document.addEventListener('DOMcontentLoaded', getWeather);

function getWeather(){
  
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.drawResults(results);
  })
  .catch(err => console.log(err));
}