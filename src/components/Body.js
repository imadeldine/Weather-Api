import DetailedWeather from "./DetailedWeather";
import GeneralWeather from "./GeneralWeather";
import { kelvinToCelsius, idToIcon } from "../helper";

export default function Body(props) {
  const detailedItems = props.weather.list.slice(1, 8);
  const firstItem = props.weather.list[0];
  return (
    <div className="body-container">
      <GeneralWeather
        icon={idToIcon(firstItem.weather[0].id)}
        description={firstItem.weather[0].description}
        min={kelvinToCelsius(firstItem.main.temp_min)}
        max={kelvinToCelsius(firstItem.main.temp_max)}
        humidity={firstItem.main.humidity}
        pressure={firstItem.main.pressure}
      />
      <DetailedWeather detailedItems={detailedItems} />
    </div>
  );
}
