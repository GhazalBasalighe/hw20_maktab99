import laps from "./Laps.module.css";
import { useContext } from "react";
import { LapsContext } from "../../context/lap-records";

function Laps() {
  const { laps: lapsArr } = useContext(LapsContext);
  return (
    <table className={laps.lapsTable}>
      <thead>
        <tr>
          <th>Lap</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {lapsArr.map((lap, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{lap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Laps;
