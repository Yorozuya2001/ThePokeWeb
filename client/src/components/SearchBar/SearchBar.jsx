import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.inputSearchBar}
        type="text"
        placeholder="Search a pokemon..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className={styles.buttonSearchBar}>Search</button>
    </div>
  );
};

export default SearchBar;
