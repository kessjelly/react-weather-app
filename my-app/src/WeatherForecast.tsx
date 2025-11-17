type WeatherForecastProps = {
  data: {
    city?: string;
    temperature?: number;
    wind?: number;
    humidity?: number;
    description?: string;
    icon?: string;
    feelsLike?: number;
    date?: Date;
  };
};

export default function WeatherForecast() {
  return <div className="weather-forecast" id="forecast"></div>;
}
