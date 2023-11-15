import cardStyles from "./Card.module.css";
export function Card({ weather }) {
  return (
    <div className={cardStyles.cardContainer}>
      {weather.forecast.forecastday.map((day, index) => (
        <div className={cardStyles.card} key={index}>
          <span className={cardStyles.day}>{day.day.condition.text}</span>
          <span className={cardStyles.day}>Tue</span>
          <span className={cardStyles.temp}>30 °C</span>
        </div>
      ))}
    </div>
  );
}
