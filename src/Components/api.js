import axios from 'axios';

const weatherApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const apiGetCurrentWeather = (location) => {
  return weatherApi
    .get('/weather', {
      params: {
        appid: process.env.REACT_APP_API_KEY,
        q: location,
        units: 'metric'
      }
    })
    .then(({ data }) => {
      return data;
    });
};
