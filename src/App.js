import { useState } from 'react';
import './App.css';
import { apiGetWeather } from './Components/api';
import CurrentWeather from './Components/CurrentWeather';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState({});

  const getWeather = (location) => {
    apiGetWeather(location)
      .then((res) => {
        console.log(res);
        setCurrentData(res.currentData);
        setForecastData(res.forecastData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <SearchBar getWeather={getWeather} />
      <CurrentWeather currentData={currentData} />
    </div>
  );
};

export default App;
