var axios = require ('axios');

const API_KEY = 'f9c7ec3285620cd8c0d881bf79060b7f';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${API_KEY}`;
//f9c7ec3285620cd8c0d881bf79060b7f

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(err.response.data.message);
      // throw new Error('Unable to fetch weather for that location.');
    });
  }
}
