import React from "react";
import { useState } from "react";

const CitySearch = ({ allLocations }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];

    setQuery(value);
    setSuggestions(filteredLocations);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setSuggestions([]); // Clear suggestions
  };

  const handleFocus = () => {
    setSuggestions(query ? allLocations : []);
  };

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={handleFocus}
        onChange={handleInputChanged}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li onClick={handleItemClicked} key={index}>
              {suggestion}
            </li>
          ))}
          <li onClick={handleItemClicked} key="See all cities">
            <b>See all cities</b>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
