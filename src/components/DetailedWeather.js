import DetailedWeatherItem from "./DetailedWeatherItem";
import { kelvinToCelsius, getTimeFromDateTime, idToIcon } from "../helper";
export default function DetailedWeather(props) {
  return (
    <div className="detailed-weather-container">
      {props.detailedItems.map((item) => (
        <DetailedWeatherItem
          time={getTimeFromDateTime(item.dt_txt)}
          icon={idToIcon(item.weather[0].id)}
          temperature={kelvinToCelsius(item.main.temp)}
        />
      ))}
    </div>
  );
}
