import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Body from "./components/Body";
//import FakeWeatherData from "./assets/forecast.json";

export default class App extends React.Component {
  state = {
    weather: null,
    error: null
  };

  updateCity = (newCity) => {
    this.getWeather(newCity);
  };

  getWeather = async (newCity) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&cnt=36&appid=8cfa7e19634b3a73e1de46a95651eef9`
      );
      const result = await response.json();
      console.log(result);
      if (result.cod == 200) this.setState({ weather: result, error: null });
      else this.setState({ error: result.message });
    } catch (err) {
      this.setState({ error: "Problem with the network" });
    }
  };

  render() {
    return (
      <div className="main-container">
        <Header updateCity={this.updateCity} />
        {this.state.error ? (
          <div>{this.state.error}</div>
        ) : (
          <>
            {this.state.weather && (
              <Body
                weather={this.state.weather}
                message="hello b08, please stay awake"
              />
            )}
          </>
        )}
      </div>
    );
  }
}
