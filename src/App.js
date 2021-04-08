import { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState();

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
};

export default App;
