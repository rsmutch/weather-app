import { useState } from 'react';
import './App.css';
import { apiGetWeather } from './Components/api';
import CurrentWeather from './Components/CurrentWeather';
import Forecast from './Components/Forecast';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState({});

  const getWeather = (location) => {
    apiGetWeather(location)
      .then((res) => {
        setCurrentData(res.currentData);
        setForecastData(res.forecastData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearWeatherData = () => {
    setCurrentData({});
    setForecastData({});
  };

  return (
    <div className="App">
      <Header clearWeatherData={clearWeatherData} />
      <SearchBar getWeather={getWeather} />
      <CurrentWeather currentData={currentData} />
      <Forecast forecastData={forecastData} />
    </div>
  );
};

export default App;
