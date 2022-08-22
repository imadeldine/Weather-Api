export default function DetailedWeatherItem(props) {
  return (
    <div className="detailed-weather-item">
      <span>{props.time}</span>
      <img src={props.icon} />
      <span>{props.temperature}°C </span>
    </div>
  );
}
