import timer from "./Timer.module.css";
import { useRef, useState, useContext } from "react";
import { LapsContext } from "../../context/lap-records";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const { laps: lapsArr, setLaps } = useContext(LapsContext);

  //REFERENCE TO INTERVAL ID
  let TimeCounter = useRef(null);

  // FUNCTION FOR START BTN
  function handleTimeIncrement() {
    if (!TimeCounter.current) {
      TimeCounter.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(true);
  }

  //FUNCTION FOR STOP BTN
  function handleTimeStop() {
    clearInterval(TimeCounter.current);
    TimeCounter.current = null;
    setIsRunning(false);
  }

  // FORMATTING FUNCTION TO ADD 0
  function formatTime(inputTime) {
    let hours = Math.floor(inputTime / 3600);
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = Math.floor(inputTime / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = Math.floor(inputTime % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + " : " + minutes + " : " + seconds;
  }

  // FUNCTION FOR LAP RECORDS
  function handleLapCreation() {
    const now = new Date(time).getTime();
    const formattedNow = formatTime(now);
    // setLaps((prevLaps) => [...prevLaps, formattedNow]);
    setLaps([...lapsArr, formattedNow]);
  }

  return (
    <div className={timer.timerContainer}>
      <span className={timer.timerCount}>{formatTime(time)}</span>
      <div className={timer.btnSection}>
        <button className={timer.btnStart} onClick={handleTimeIncrement}>
          Start
        </button>
        <button className={timer.btnLap} onClick={handleLapCreation}>
          Lap
        </button>
        <button className={timer.btnStop} onClick={handleTimeStop}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default Timer;
