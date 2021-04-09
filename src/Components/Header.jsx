import React from 'react';

const Header = ({ clearWeatherData }) => {
  return (
    <header>
      <div className="top-buffer" />
      <h1 onClick={clearWeatherData}>weather</h1>
    </header>
  );
};

export default Header;
