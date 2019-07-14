// Init weather obj
const weather = new Weather('Vancouver');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMcontentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',
(e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation('Miami');

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide'); 
});

getWeather();
function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.drawResults(results);
    })
  .catch(err => console.log(err));
}