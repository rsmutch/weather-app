import axios from 'axios';
import { convertWeatherData } from './utilities';

const weatherApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const apiGetWeather = (location) => {
  const weather = weatherApi.get('/weather', {
    params: {
      appid: process.env.REACT_APP_API_KEY,
      q: location,
      units: 'metric'
    }
  });

  const daily = weatherApi.get('/forecast', {
    params: {
      appid: process.env.REACT_APP_API_KEY,
      q: location,
      units: 'metric'
    }
  });

  console.log('here');

  return axios.all([weather, daily]).then(
    axios.spread((...responses) => {
      console.log('there');
      const { data } = responses[0];
      const { list } = responses[1].data;
      const currentData = convertWeatherData(data);
      const forecastData = list.map((item) => {
        return convertWeatherData(item);
      });
      console.log(list);
      console.log(forecastData);
    })
  );
};
