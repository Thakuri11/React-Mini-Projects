import { useEffect, useState } from "react";
import "./WeatherStyle.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  // const week = ["Sun", "Mon", "Tues", "Wed", "Thur"];
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  async function getWeather() {
    if (city == "") {
      setError("Please Enter City Name !!");
      setWeather(null);
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},NP&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod != 200) {
      setError(data.message);
      setWeather(null);
      return;
    }
    // console.log(data);
    setWeather(data);
    setError("");
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},NP&appid=${apiKey}&units=metric`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    setForecast(forecastData.list);
    // console.log(forecastData);
  }

  useEffect(() => {
    document.title = "Weather App";
  }, []);

  return (
    <>
      <div className="main-body">
        <div className="weather-section">
          <header>
            <h1>Weather App</h1>
          </header>
          <div className="content">
            <section className="search">
              <input
                type="text"
                placeholder="Enter Your City"
                className="input-field"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getWeather();
                  }
                }}
              />
              {/* <button onClick={getWeather}>Search</button> */}
            </section>
            <section className="weather-display">
              {error && <p className="error">{error}!!</p>}
              {weather && (
                <>
                  <h2>{weather.name}</h2>
                  <p>Temp 🌡️ : {weather.main.temp} °C</p>
                  <p>Weather ☁️: {weather.weather[0].main}</p>
                  <p>Humidity💧: {weather.main.humidity}%</p>
                  <p>Wind Speed 🌬️: {weather.wind.speed} m/s</p>
                </>
              )}
            </section>
            {weather && <h1 className="forecast-heading">5-Days Forecast :</h1>}
            <section className="forecast-display">
              {weather &&
                forecast
                  .filter((_, index) => index % 8 === 0)
                  .map((item, index) => (
                    <div key={item.dt}>
                      {/* <h3>Day {index + 1}</h3> */}
                      {/* <h3>{week[index]}</h3> */}
                      <p>
                        {new Date(item.dt_txt).toLocaleDateString("en-US", {
                          weekday: "short",
                        })}
                      </p>
                      <p>{item.dt_txt}</p>
                      <p>{item.main.temp}°C</p>
                      <p>{item.weather[0].main}</p>
                    </div>
                  ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
