import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { setPokemons } from "../../redux/pokemonsSlice";
import { URL } from "../../url";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleClick = async () => {
    try {
      let data = await fetch(`${URL}/pokemons/name?search=${search}`);
      data = await data.json();
      console.log(data);
      dispatch(setPokemons(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickInAll = () => {
    fetch(`${URL}/pokemons`)
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          className={styles.inputSearchBar}
          type="text"
          placeholder="Search a pokemon..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className={styles.buttonSearchBar} onClick={handleClick}>
          Search
        </button>
      </div>
      <button className={styles.allButton} onClick={handleClickInAll}>
        All pokemons
      </button>
    </>
  );
};

export default SearchBar;
