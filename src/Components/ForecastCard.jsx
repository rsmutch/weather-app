import React from 'react';

const ForecastCard = ({ day }) => {
  return (
    <div>
      <h3>{day.date}</h3>
      <h3>
        {day.temp}c, feels like {day.feelsLike}c
      </h3>
    </div>
  );
};

export default ForecastCard;
