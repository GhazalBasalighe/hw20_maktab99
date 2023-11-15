import searchStyles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <input
      type="search"
      name="searchCity"
      id="searchCity"
      placeholder="Search City"
      className={searchStyles.searchBar}
    />
  );
}
