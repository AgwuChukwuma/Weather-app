import React from "react";
import PropTypes from "prop-types";

const SearchSelection = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
    getWeatherDetails(API_URL);
  };

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}`;
        getWeatherDetails(API_URL);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-input"
          required
        />
      </form>
      <button className="location-button" onClick={handleLocationSearch}>
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </div>
  );
};

SearchSelection.propTypes = {
  getWeatherDetails: PropTypes.string.isRequired,
};
export default SearchSelection;
