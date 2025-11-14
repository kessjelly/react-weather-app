import React from "react";
import ReactDOM from "react-dom/client";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Weather-container">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter your city..."
              required
              id="search-form-input"
              className="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
          <div className="app-data">
            <div>
              <h1 className="app-city-name" id="app-city-name">
                Gold Coast
              </h1>
              <p className="app-details">
                <span id="time">10:00</span>,{" "}
                <span id="description">Sunny</span>
                <br />
                Humidity: 
                <strong id="humidity">25%</strong>, Wind:
                <strong id="speed">10%</strong>
                <br />
                <span id="feel-like">
                  Feels like: <strong id="feel-like-temp">20°C</strong>
                </span>
              </p>
            </div>
            <div className="app-temperature-container">
              <div className="app-emoji" id="icon"></div>
              <div className="app-temperature" id="temperature"></div>
              <div className="app-temp-unit">20°C</div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </main>
        <footer>
          This website was coded by
          <a href="https://github.com/kessjelly" target="_blank">
            {" "}
            Jessica Kelly
          </a>
          , is open-sourced on
          <a href="https://github.com/kessjelly/meteorologie" target="_blank">
            Github
          </a>
          and hosted on
          <a href="https://meteorologie-app.netlify.app/" target="_blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
