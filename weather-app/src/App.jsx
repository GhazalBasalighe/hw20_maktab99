import "./App.css";
import React from "react";
import { SearchBar, WeatherSection } from "./Components";
import { SearchProvider } from "./context/search-context";

function App() {
  return (
    <>
      <SearchProvider>
        <SearchBar />
        <WeatherSection />
      </SearchProvider>
    </>
  );
}

export default App;
