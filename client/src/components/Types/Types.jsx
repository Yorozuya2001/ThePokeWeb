import { useSelector, useDispatch } from "react-redux";
import styles from "./Types.module.css";
import { useState, useEffect } from "react";
import { setPokemonsFiltered } from "../../redux/pokemonsSlice";
import { filterOptions } from "../../redux/optionsSlice";
import FilterSource from "../../assets/filter-svgrepo-com.svg";
import FilterOffSource from "../../assets/filter-off-svgrepo-com.svg";

const Types = ({ filterActive, setFilterActive, setFilterOff, filterOff }) => {
  const types = useSelector((state) => state.pokemons.types);
  const typesOptions = useSelector((state) => state.options.filterBy);

  const dispatch = useDispatch();
  const [checkboxStates, setCheckboxStates] = useState(typesOptions);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  useEffect(() => {
    if (filterOff) {
      dispatch(filterOptions({}));
      dispatch(setPokemonsFiltered({}));
      setCheckboxStates({});
      setFilterOff(!filterOff);
      return;
    }

    const checkboxsInTrue = Object.keys(checkboxStates).reduce(
      (acc, checkbox) => {
        if (checkboxStates[checkbox]) {
          acc[checkbox] = checkboxStates[checkbox];
        }
        return acc;
      },
      {}
    );
    dispatch(filterOptions(checkboxsInTrue));
    dispatch(setPokemonsFiltered(checkboxsInTrue));
  }, [checkboxStates, dispatch, filterOff, setFilterOff]);

  return (
    <div className={styles.typesContainer}>
      <div
        className={styles.filterContainer}
        onClick={() => setFilterActive(!filterActive)}
      >
        <img src={FilterSource} alt="Filter" />
      </div>
      <div
        className={styles.filterContainer}
        onClick={() => setFilterOff(!filterOff)}
      >
        <img src={FilterOffSource} alt="Remove filters" />
      </div>
      <div
        className={`${styles.checkboxContainer} ${
          !filterActive && styles.display
        }`}
      >
        {types.length &&
          types.map((type) => {
            return (
              <div key={type.name}>
                <input
                  type="checkbox"
                  id={type.id}
                  name={type.name}
                  value={type.name}
                  checked={checkboxStates[type.name] || false}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={type.name}>{type.name}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Types;
