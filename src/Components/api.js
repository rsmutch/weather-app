import axios from 'axios';
import { convertWeatherData } from './utilities';

const weatherApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const apiGetWeather = (location) => {
  let currentData = {};
  return weatherApi
    .get('/weather', {
      params: {
        appid: process.env.REACT_APP_API_KEY,
        q: location,
        units: 'metric'
      }
    })
    .then(({ data }) => {
      currentData = convertWeatherData(data, false);
      const { lat, lon } = data.coord;
      return weatherApi
        .get('/onecall', {
          params: {
            appid: process.env.REACT_APP_API_KEY,
            lat: lat,
            lon: lon,
            units: 'metric'
          }
        })
        .then(({ data }) => {
          const forecastData = data.daily.map((item) => {
            return convertWeatherData(item, true);
          });
          return { currentData, forecastData };
        });
    });
};
