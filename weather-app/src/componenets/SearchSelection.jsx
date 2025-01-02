import React from "react";

const SearchSelection = ({ getWeatherDetails }) =>{


    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log(API_KEY);
    const handleCitySearch = (e) =>{console.log(API_KEY);
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
        getWeatherDetails(API_URL);
    }
    return(

<div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
      <span className="material-symbols-rounded">search</span>
        <input type="search" placeholder="Enter a city name"
         className="search-input" required />
      </form>
      <button className="location-button">
      <span className="material-symbols-rounded">my_location</span>
      </button>
      </div>
    )
}

export default SearchSelection