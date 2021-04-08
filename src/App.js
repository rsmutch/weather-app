import { useState } from 'react';
import './App.css';
import { apiGetWeather } from './Components/api';
import CurrentWeather from './Components/CurrentWeather';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState({});

  const getWeather = (location) => {
    apiGetWeather(location)
      .then((res) => {
        console.log(res);
        // setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <SearchBar getWeather={getWeather} />
      <CurrentWeather weatherData={weatherData} />
    </div>
  );
};

export default App;
