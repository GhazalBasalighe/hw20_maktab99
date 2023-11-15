import cardStyles from "./Card.module.css";
import dateTools from "../../../utils/formatDate";

export function Card({ weather }) {
  return (
    <div className={cardStyles.cardContainer}>
      {weather.forecast.forecastday.map((day, index) => (
        <div className={cardStyles.card} key={index}>
          <img src={day.day.condition.icon} alt="weather condition" />
          <span className={cardStyles.day}>
            {dateTools.formatDay(weather.forecast.forecastday[index].date)}
          </span>
          <span className={cardStyles.temp}>
            {day.day.avgtemp_c + " °C"}
          </span>
        </div>
      ))}
    </div>
  );
}
