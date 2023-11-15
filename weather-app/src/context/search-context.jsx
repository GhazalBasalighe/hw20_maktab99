import { createContext, useState } from "react";

export const searchContext = createContext();

export function SearchProvider({ children }) {
  const [city, setCity] = useState("");
  function handleUpdateCity(newCity) {
    setCity(newCity);
  }
  return (
    <searchContext.Provider value={{ city, handleUpdateCity }}>
      {children}
    </searchContext.Provider>
  );
}
