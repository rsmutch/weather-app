import React from 'react';

const CurrentWeather = ({ currentData }) => {
  console.log(currentData);
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
    <div>
      <h1>{date}</h1>
      <h1>
        {city}, {country}
      </h1>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <h2>{temp}c</h2>
      <h2>Feels like {feelsLike}c</h2>
      <h3>Sunrise: {sunrise}</h3>
      <h3>Sunset: {sunset}</h3>
      <h3>Wind: {windSpeed}mph</h3>
    </div>
  );
};

export default CurrentWeather;
