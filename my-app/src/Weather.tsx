import axios from "axios";
import { useState } from "react";
import Weatherinfo from "./Weatherinfo";

import "./Weather.css";

type WeatherData = {
  ready: boolean;
  temperature?: number;
  wind?: number;
  humidity?: number;
  description?: string;
  icon?: string;
  feelsLike?: number;
  city?: string;
  date?: Date;
};

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData>({ ready: false });

  function handleResponse(response: any) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!city) return; // don't fetch if input is empty
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Weather">
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter your city..."
            required
            className="search-form-input"
            value={city}
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>

      {weatherData.ready ? (
        <Weatherinfo data={weatherData} />
      ) : (
        <p>Enter a city to see the weather...</p>
      )}
    </div>
  );
}
