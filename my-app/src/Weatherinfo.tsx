import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

type WeatherInfoProps = {
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

export default function Weatherinfo({ data }: WeatherInfoProps) {
  return (
    <div className="Weatherinfo">
      <main>
        <div className="app-data">
          <div>
            <h1 className="app-city-name" id="app-city-name">
              {data.city}
            </h1>
            <span id="day">
              <FormattedDate date={data.date} />
            </span>
            <p className="app-details">
              <span id="description">{data.description}</span>
              <br />
              Humidity:
              <strong id="humidity"> {data.humidity}%</strong>
              <br />
              Wind:
              <strong id="speed"> {data.wind} km/h</strong>
              <br />
              <span id="feel-like mt-3">
                Feels like:{" "}
                <strong id="feel-like-temp">
                  {Math.round(data.feelsLike!)}°C
                </strong>
              </span>
            </p>
          </div>
          <div className="app-temperature-container">
            <div className="app-emoji" id="icon">
              <img src={data.icon} alt={data.description} />
            </div>

            <div>
              <WeatherTemperature data={data} />
            </div>
          </div>
        </div>
       <WeatherForecast />
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
  );
}
