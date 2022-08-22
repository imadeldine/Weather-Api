import Clear from "./assets/clear.svg";
import PartlyCloudy from "./assets/partlycloudy.svg";

export function kelvinToCelsius(temp) {
  return Math.round(temp - 273.15);
}

export function getTimeFromDateTime(dateTime) {
  return dateTime.split(" ")[1].slice(0, 5);
}

export function idToIcon(id) {
  if (id < 300) return Clear;
  else if (id < 500) return PartlyCloudy;
  else if (id < 600) return Clear;
  else if (id < 700) return PartlyCloudy;
  else if (id < 800) return PartlyCloudy;
  else if (id === 800) return Clear;
  else if (id === 801) return PartlyCloudy;
  else return Clear;
}
