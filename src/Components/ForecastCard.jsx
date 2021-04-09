import React from 'react';
import SunriseImg from './assets/sunrise.png';
import SunsetImg from './assets/sunset.png';
import WindImg from './assets/windy.png';

const ForecastCard = ({ day }) => {
  const {
    date,
    description,
    feelsLike,
    icon,
    sunrise,
    sunset,
    temp,
    windSpeed
  } = day;
  return (
    <>
      <div className="forecast-card-container">
        <h3 classname="forecast-card-date">{date}</h3>
        <div classname="forecast-card-temp">
          <p>{temp}c</p>{' '}
          <p className="forecast-card-feels">feels {feelsLike}c</p>
        </div>
        <img
          className="forecast-card-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <div className="forecast-card-sunrise">
          <img className="forecast-card-img-sun" src={SunriseImg} alt="" />
          <p>{sunrise}</p>
        </div>
        <div className="forecast-card-sunset">
          <img className="forecast-card-img-sun" src={SunsetImg} alt="" />
          <p>{sunset}</p>
        </div>
        <div className="forecast-card-wind">
          <img className="forecast-card-img-wind" src={WindImg} alt="" />
          <p>{windSpeed}mph</p>
        </div>
      </div>

      <hr className="hr-gradient" />
    </>
  );
};

export default ForecastCard;
