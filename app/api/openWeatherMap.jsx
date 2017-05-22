/**
 * Created by david on 5/21/17.
 */
import axios from 'axios'

const API_KEY = 'e3415ebd8f9d067c5f2af6196d4e5a11'
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric'

module.exports = {
  getTemp: function (location) {
    const encodedLocation = encodeURIComponent(location)
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&appid=${API_KEY}`

    // axios returns a promise thus, the .then
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function () {
      throw new Error('Unable to fetch weather');
    });
  }
}