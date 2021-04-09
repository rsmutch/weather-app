import React from 'react';
import ForecastCard from './ForecastCard';

const Forecast = ({ forecastData }) => {
  if (Object.keys(forecastData).length === 0) {
    return null;
  }
  console.log(forecastData);
  return (
    <div>
      {forecastData.map((day) => {
        return <ForecastCard day={day} />;
      })}
    </div>
  );
};

export default Forecast;
