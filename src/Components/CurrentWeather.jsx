import React from 'react';
import { convertUnixTime } from './utilities';

const CurrentWeather = ({ weatherData }) => {
  const { name, sys, weather, main, wind } = weatherData;
  if (Object.keys(weatherData).length === 0) {
    return null;
  }
  return (
    <div>
      <h1>
        {name}, {sys.country}
      </h1>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <h2>{main.temp.toFixed(1)}c</h2>
      <h2>Feels like {main.feels_like.toFixed(1)}c</h2>
      <h3>Sunrise: {convertUnixTime(sys.sunrise)}</h3>
      <h3>Sunset: {convertUnixTime(sys.sunset)}</h3>
      <h3>Wind: {parseInt(wind.speed * 2.23694)}mph</h3>
    </div>
  );
};

export default CurrentWeather;
