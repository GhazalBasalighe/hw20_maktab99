import timer from "./Timer.module.css";

function Timer() {
  return (
    <div className={timer.timerContainer}>
      <span className={timer.timerCount}>33:12:00</span>
      <div className={timer.btnSection}>
        <button className={timer.btnStart}>Start</button>
        <button className={timer.btnLap}>Lap</button>
        <button className={timer.btnStop}>Stop</button>
      </div>
    </div>
  );
}

export default Timer;
