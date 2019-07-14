class Weather {
  constructor(city) {
    this.apiKey = '86f5d41c1ba9116f952921e15e899669';
    this.city = city;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
    
    const responseData = await response.json();
    
    return responseData; 
  }

  changeLocation(city) {
    this.city = city;
  }
}
