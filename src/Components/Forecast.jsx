import React from 'react';
import ForecastCard from './ForecastCard';

const Forecast = ({ forecastData }) => {
  if (Object.keys(forecastData).length === 0) {
    return null;
  }
  console.log(forecastData);
  return (
    <div className="forecast-container">
      <p className="forecast-title">
        Forecast
        <hr className="hr-gradient" />
      </p>
      <div className="forecast-cards">
        {forecastData.map((day) => {
          return <ForecastCard day={day} />;
        })}
      </div>
    </div>
  );
};

export default Forecast;
