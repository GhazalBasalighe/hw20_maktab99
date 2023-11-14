import { createContext, useState } from "react";

export const LapsContext = createContext();

function lapProvider({ children }) {
  const [laps, setLaps] = useState([]);
  return (
    <LapsContext.Provider value={{ laps, setLaps }}>
      {children}
    </LapsContext.Provider>
  );
}

export default lapProvider;
