import cardStyles from "./Card.module.css";
export function Card() {
  return (
    <div className={cardStyles.card}>
      {/* <IoSunnyOutline /> */}
      <span className={cardStyles.day}>Tue</span>
      <span className={cardStyles.temp}>30 °C</span>
    </div>
  );
}
