import React from "react";
import PropTypes from "prop-types";

const HourlyWeather = ({ time, icon, temperature }) => {
  return (
    <li className="weather-item">
      <p className="time">{time.slice(-5)}</p>
      <img src={icon} alt="weather icon" className="weather-icon" />
      <p className="temperature">{temperature}°</p>
    </li>
  );
};

HourlyWeather.propTypes = {
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default HourlyWeather;
