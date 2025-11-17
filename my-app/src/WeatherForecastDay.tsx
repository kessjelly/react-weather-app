type WeatherForecastDayProps = {
  data: any;
  index: number;
};

export default function WeatherForecastDay({ data, index }: WeatherForecastDayProps) {
  function maxTemperature() {
    let temperature = Math.round(data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(data.temperature.minimum);
    return `${temperature}°`;
  }

  function dayName() {
    const today = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = (today.getDay() + index + 1) % 7;
    return days[dayIndex];
  }

  return (
    <div>
      {" "}
      <div className="WeatherForecast-Day">{dayName()}</div>
      <div className="WeatherForecast-icon">
        <img src={data.condition.icon_url} alt={data.condition.description} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
