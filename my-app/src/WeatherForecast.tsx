import "./WeatherForecast.css";
import axios from "axios";

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

export default function WeatherForecast({ data }: WeatherForecastProps) {
    function handleForecastResponse(response: any) {
      console.log(response.data);
    }


    const apiKey = "3b0e0f1639296410oabf7a45tcd4001b";
    let city = data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleForecastResponse);

  return (
    <div className="WeatherForecast" id="forecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Day"> Thurs </div>
          <div className="WeatherForecast-icon">
            <img src={data.icon} alt={data.description} />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}