import weatherStyles from "./WeatherSection.module.css";
import { GrLocation } from "react-icons/gr";
import { Card } from "../Card";
export function WeatherSection() {
  return (
    <div className={weatherStyles.mainSection}>
      <div className={weatherStyles.left}>
        <div className={weatherStyles.topLeft}>
          <span className={weatherStyles.day}>Tuesday</span>
          <span className={weatherStyles.date}>20 Jun 2022</span>
          <span className={weatherStyles.city}>
            <GrLocation />
            <span>Biarritz, FR</span>
          </span>
        </div>
        <div className={weatherStyles.bottomLeft}>
          <span className={weatherStyles.temp}>29 °C</span>
          <span className={weatherStyles.status}>Sunny</span>
        </div>
      </div>
      <div className={weatherStyles.right}>
        <div className={weatherStyles.topRight}>
          <div className={weatherStyles.property}>
            <span>PRECIPITATION</span>
            <span className={weatherStyles.propertyQuantity}>0%</span>
          </div>
          <div className={weatherStyles.property}>
            <span>HUMIDITY</span>
            <span className={weatherStyles.propertyQuantity}>42%</span>
          </div>
          <div className={weatherStyles.property}>
            <span>WIND</span>
            <span className={weatherStyles.propertyQuantity}>3 km/h</span>
          </div>
        </div>
        <div className={weatherStyles.bottomRight}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
