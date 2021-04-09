import React from 'react';

const ForecastCard = ({ day }) => {
  console.log(day);
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
          <p>{temp}c</p> <p>feels {feelsLike}c</p>
        </div>
        <img
          className="forecast-card-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <p className="forecast-card-sunrise">Sunrise {sunrise}</p>
        <p className="forecast-card-sunset">Sunset {sunset}</p>
        <p className="forecast-card-wind">Wind {windSpeed}mph</p>
      </div>

      <hr className="hr-gradient" />
    </>
  );
};

export default ForecastCard;
