import { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

type WeatherForecastProps = {
  data: { city?: string };
};

export default function WeatherForecast({ data }: WeatherForecastProps) {
  const [forecast, setForecast] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!data.city) return;

    const apiKey = "3b0e0f1639296410oabf7a45tcd4001b";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${data.city}&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
  }, [data.city]);

  if (!loaded) {
    return <p>Loading forecast...</p>;
  }

   const nextFiveDays = forecast.slice(1, 6);
  return (
    <div className="WeatherForecast" id="forecast">
      <div className="row">
     {nextFiveDays.map((day, index) => (
      <div className="col" key={index}>
        <WeatherForecastDay data={day} index={index} />
        </div>
        ))}
      </div>
    </div>
  );
}
