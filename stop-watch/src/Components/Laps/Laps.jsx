import laps from "./Laps.module.css";

function Laps() {
  return (
    <table className={laps.lapsTable}>
      <thead>
        <tr>
          <th>Lap</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>00:06:20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>00:06:25</td>
        </tr>
        <tr>
          <td>3</td>
          <td>00:06:25</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Laps;
