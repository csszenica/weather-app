import { useState } from 'react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import WeatherData from './components/WeatherData';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const searchCity = async () => {
    try {
      setError(null);
      const response = await fetch(`${process.env.REACT_APP_WEATHER_URL}weather?units=metric&q=${searchTerm}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  
      const data = await response.json();

      if (data.cod === "404") {
        setError("You entered nonexisting city, please try again");

        return;
      }

      setLocation({ lng: data.coord.lon, lat: data.coord.lat })
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMyLocation = async () => {
    const responseLocation = await fetch(`${process.env.REACT_APP_GOOGLE_GEOLOCATION_URL}?key=${process.env.REACT_APP_GOOGLE_GEOLOCATION_API_KEY}`,
        {
          method: 'POST'
        }
    );
    const dataLocation = await responseLocation.json();

    setLocation({lng: dataLocation.location.lng, lat: dataLocation.location.lat})

    const response = await fetch(`${process.env.REACT_APP_WEATHER_URL}weather?units=metric&lat=${dataLocation.location.lat}&lon=${dataLocation.location.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  
    const data = await response.json();

    if (data.cod === "404") {
      setError("You entered nonexisting city, please try again");

      return;
    }

    setWeatherData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchBar setSearchTerm={setSearchTerm} searchCity={searchCity} getMyLocation={getMyLocation} />
        { error }
        { weatherData && <WeatherData weatherData={weatherData} /> }
        { location && <Map location={location} />}
      </header>
    </div>
  );
}

export default App;
