import React from 'react';

const Filter = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form>
      <label htmlFor="filter">
        Find a person
        <input type="text" id="filter" value={search} onChange={handleSearch} />
      </label>
    </form>
  );
};

export default Filter;
