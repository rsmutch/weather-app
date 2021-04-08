import { useState } from 'react';
import './App.css';
import { apiGetCurrentWeather } from './Components/api';
import CurrentWeather from './Components/CurrentWeather';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState({});

  const getCurrentWeather = (location) => {
    apiGetCurrentWeather(location)
      .then((res) => {
        console.log(res);
        setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <SearchBar getCurrentWeather={getCurrentWeather} />
      <CurrentWeather weatherData={weatherData} />
    </div>
  );
};

export default App;
