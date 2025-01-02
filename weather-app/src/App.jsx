import CurrentWeather from "./componenets/CurrentWeather";
import HourlyWeather from "./componenets/HourlyWeather";
import SearchSelection from "./componenets/SearchSelection";

const App =() => {
  const getWeatherDetails = async (API_URL) =>{
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    }catch(error){
      console.log(error)
    }
  }
  return(
    <div className="container">
      <SearchSelection getWeatherDetails={getWeatherDetails}/>
      <div className="weather-section">
        <CurrentWeather />
        <div className="hourly-forcast">
          <ul className="weather-list">
            <HourlyWeather />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App 