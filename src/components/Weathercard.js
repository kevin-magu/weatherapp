import React, { useState } from "react";
import "../styles/Weathercard.css";
import Clear from "../images/clear.png";
import Humidity from "../images/humidity.png";
import Wind from "../images/wind.png";
import Clouds from "../images/clouds.png";
import Rain from "../images/rain.png";
import Drizzle from "../images/drizzle.png";
import Mist from "../images/mist.png";

function Weathercard() {
  const apiKey = "055b7d5f2715779c9dcb2b24327a0408";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [city, setCity] = useState("Nairobi");
  const [temperature, setTemperature] = useState(20);
  const [humidity, setHumidity] = useState(30);
  const [wind, setWind] = useState(5);
  const [loading, setLoading] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");

  async function checkWeather(city) {
    setLoading("Getting weather ...");
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log("Data", data);
    setLoading("");

    if (response.status !== 404) {
      //setting images
      if (data.weather[0].main == "Clouds") {
        setImage(Clouds);
      } else if (data.weather[0].main == "Clear") {
        setImage(Clear);
      } else if (data.weather[0].main == "Rain") {
        setImage(Rain);
      } else if (data.weather[0].main == "Drizzle") {
        setImage(Drizzle);
      } else if (data.weather[0].main == "Mist") {
        setImage(Mist);
      }
      //updating usestate
      setCountry(data.sys.country);
      setCity(data.name);
      setTemperature(Math.round(data.main.temp));
      setHumidity(Math.round(data.main.humidity));
      setWind(Math.round(data.wind.speed));

      document.querySelector(".main-section").style = "display: block";
    } else {
      alert("Invalid City");
    }
  }

  const handleSearch = () => {
    if (city.trim() !== "") {
      checkWeather(city);
    } else {
      alert("please input a city");
    }
  };

  return (
    <div className="weather-card">
      <div className="search-div">
        <input
          className="input"
          type="text"
          placeholder="Search Weather by city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
        <p className="loading">{loading}</p>
      </div>
      <div className="main-section">
        <div className="city">
          <p>{city}</p> <p>- {country}</p>
        </div>
        <div className="temperature">
          <p className="status-image">
            {" "}
            <img src={image} alt="" />{" "}
          </p>
          <h1>
            {temperature}&nbsp; <sup>oC</sup>
          </h1>

          <div className="humidity-wind">
            <img src={Humidity} alt="" />{" "}
            <p className="humidity">Humidity- {humidity}%</p>
            <img src={Wind} alt="" />
            <p className="wind">Wind- {wind} km/h</p>
          </div>
        </div>
      </div>
      <p className="author">
            Made on earth by <a href="https://github.com/kevin-magu">humans</a>
          </p>
    </div>
  );
}

export default Weathercard;
