import React from 'react';
import SunriseImg from './assets/sunrise.png';
import SunsetImg from './assets/sunset.png';
import WindImg from './assets/windy.png';

const CurrentWeather = ({ currentData }) => {
  if (Object.keys(currentData).length === 0) {
    return null;
  }
  const {
    city,
    country,
    date,
    description,
    feelsLike,
    icon,
    sunrise,
    sunset,
    temp,
    windSpeed
  } = currentData;
  return (
    <div className="current-data-container">
      <p className="current-data-date">{date}</p>
      <h2 className="current-data-location">
        {city}, {country}
        <hr className="hr-gradient" />
      </h2>
      <img
        className="current-data-icon"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div className="current-data-temp">
        <p className="current-data-actual">{temp}c</p>
        <p className="current-data-feels">Feels like {feelsLike}c</p>
      </div>
      <div className="current-data-sun">
        <div className="current-data-sunrise">
          <img className="current-data-sun-img" src={SunriseImg} alt="" />
          <p> {sunrise}</p>
        </div>
        <div className="current-data-sunset">
          <img className="current-data-sun-img" src={SunsetImg} alt="" />
          <p> {sunset}</p>
        </div>
      </div>
      <div className="current-data-wind">
        <p> {windSpeed} mph</p>
        <img className="current-data-wind-img" src={WindImg} alt="" />
      </div>
    </div>
  );
};

export default CurrentWeather;
