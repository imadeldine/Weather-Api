export default function GeneralWeather(props) {
  return (
    <div className="general-weather-container">
      <div className="weather-general-icon">
        <img src={props.icon} />
      </div>
      <div className="weather-general-desc">
        <span>{props.description}</span>
      </div>
      <div className="weather-general-temp">
        <span>Temperature</span> {props.min}° to {props.max}°C
      </div>
      <div className="weather-general-hp">
        <span>Humidity</span> {props.humidity}%<span>Pressure</span>
        {props.pressure}
      </div>
    </div>
  );
}
