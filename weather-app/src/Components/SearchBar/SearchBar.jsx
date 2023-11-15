import searchStyles from "./SearchBar.module.css";
import { useContext } from "react";
import { searchContext } from "../../context/search-context";

export function SearchBar() {
  const { city, handleUpdateCity } = useContext(searchContext);
  return (
    <input
      type="search"
      name="searchCity"
      id="searchCity"
      placeholder="Search City"
      className={searchStyles.searchBar}
      onChange={(e) => handleUpdateCity(e.target.value)}
      value={city}
    />
  );
}
