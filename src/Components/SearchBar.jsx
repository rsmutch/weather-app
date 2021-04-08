import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
// import magnifyingGlass from '../assets/magnifying_glass.png';

const SearchBar = ({ getCurrentWeather }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (query) {
          getCurrentWeather(query);
          setQuery('');
        }
      }}
    >
      <Input
        value={query}
        placeholder="Change location"
        onChange={handleChange}
      />
      <Input type="submit" value="Go" disableUnderline={true} />
    </form>
  );
};

export default SearchBar;
