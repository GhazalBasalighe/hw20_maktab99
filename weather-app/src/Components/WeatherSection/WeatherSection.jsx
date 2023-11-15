import weatherStyles from "./WeatherSection.module.css";
import { Card } from "../Base";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";
import { searchContext } from "../../context/search-context";

import dateTools from "../../utils/formatDate";

export function WeatherSection() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { city } = useContext(searchContext);

  // REQUEST REQUIRED INFORMATION
  const API_KEY = "6b7df33df7ae43098f7101515231511";
  const searchedCity = city ? city : "Tehran";
  const baseURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchedCity}&days=4`;

  // FETCH WEATHER DATA
  async function fetchData() {
    try {
      const response = await axios.get(baseURL);
      const weatherData = response.data;
      setWeather(weatherData);
      console.log(weatherData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  }

  // DEBOUNCE REQUEST TO API
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeoutID);
  }, [city]);

  // SHOW LOADING SPINNER IF FETCH DATA IS NOT READY
  if (isLoading) {
    return <BounceLoader color="#8ec8de" size={80} />;
  }
  return (
    <div className={weatherStyles.mainSection}>
      <div className={weatherStyles.left}>
        <div className={weatherStyles.topLeft}>
          <span className={weatherStyles.day}>
            {dateTools.formatDay(weather.location.localtime, "long")}
          </span>
          <span className={weatherStyles.date}>
            {dateTools.formatDate(weather)}
          </span>
          <span className={weatherStyles.city}>
            {/* <GrLocation /> */}
            <span>{weather.location.name}</span>
          </span>
        </div>
        <div className={weatherStyles.bottomLeft}>
          <img
            src={weather.current.condition.icon.replace(
              "64x64",
              "128x128"
            )}
            alt="weather condition"
            width={95}
            height={95}
          />
          <span className={weatherStyles.temp}>
            {weather.current.temp_c + " °C"}
          </span>
          <span className={weatherStyles.status}>
            {weather.current.condition.text}
          </span>
        </div>
      </div>
      <div className={weatherStyles.right}>
        <div className={weatherStyles.topRight}>
          <div className={weatherStyles.property}>
            <span>PRECIPITATION</span>
            <span className={weatherStyles.propertyQuantity}>
              {weather.current.precip_in + "%"}
            </span>
          </div>
          <div className={weatherStyles.property}>
            <span>HUMIDITY</span>
            <span className={weatherStyles.propertyQuantity}>
              {" "}
              {weather.current.humidity + "%"}
            </span>
          </div>
          <div className={weatherStyles.property}>
            <span>WIND</span>
            <span className={weatherStyles.propertyQuantity}>
              {" "}
              {weather.current.wind_kph + " km/h"}
            </span>
          </div>
        </div>
        <Card weather={weather} />
        {/* <Card />
          <Card />
          <Card /> */}
      </div>
    </div>
  );
}
