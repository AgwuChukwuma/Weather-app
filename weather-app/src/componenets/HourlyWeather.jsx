import React from "react";
import PropTypes from "prop-types";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <img src="pics/sun.svg" className="weather-icon" alt="weather icon" />
      {currentWeather.temperature != null ? (
        <>
          <h2 className="temperature">
            {currentWeather.temperature} <span>°C</span>
          </h2>
          <p className="description">{currentWeather.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    temperature: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default CurrentWeather;
