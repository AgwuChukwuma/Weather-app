import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import SearchSelection from "./components/SearchSelection";
import Clear from "../pics/clear.svg";
import LoadingSpinner from "./LoadingSpinner";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: null,
    description: "",
  });
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherDetails = async (API_URL) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      // Check if data is valid
      if (!data.current || !data.forecast) {
        setError("City not found or invalid API response");
        return;
      }

      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const hourlyData = data.forecast.forecastday[0].hour;

      setCurrentWeather({ temperature, description });
      setHourlyData(hourlyData); // Store hourly data
    } catch (error) {
      setError("Error fetching weather data.");
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchSelection getWeatherDetails={getWeatherDetails} />
      <div className="weather-section">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>{error}</p> // Shows error message
        ) : (
          <>
            <CurrentWeather currentWeather={currentWeather} />
            <div className="hourly-forecast">
              <ul className="weather-list">
                {hourlyData.map((hour, index) => (
                  <HourlyWeather
                    key={index}
                    time={hour.time}
                    icon={hour.condition.icon}
                    temperature={hour.temp_c}
                  />
                ))}
                <img src={Clear} alt="Clear Weather Icon" style={{ width: 24, height: 24 }} />
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
