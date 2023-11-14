import LapProvider from "./context/lap-records";
import "./App.css";
import Timer from "./Components/Timer/Timer";
import Laps from "./Components/Laps/Laps";

function App() {
  return (
    <LapProvider>
      <div className="container">
        <Timer />
        <Laps />
      </div>
    </LapProvider>
  );
}

export default App;
