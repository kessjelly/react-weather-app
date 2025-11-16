import React, { useState } from "react";

type WeatherTemperatureProps = {
  data: {
    temperature?: number;
  };
};

export default function WeatherTemperature({ data }: WeatherTemperatureProps) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="app-temperature" id="temperature">
        {Math.round(data.temperature!)}
        <span className="app-temp-unit">
          °C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    const fahrenheitTemperature = (data.temperature! * 9) / 5 + 32;
    return (
      <div className="app-temperature" id="temperature">
        {Math.round(fahrenheitTemperature)}
        <span className="app-temp-unit">
          <a href="/" onClick={showCelsius}>°C</a> | °F
        </span>
      </div>
    );
  }
}
