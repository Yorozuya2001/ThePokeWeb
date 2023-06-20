import { useDispatch, useSelector } from "react-redux";
import { orderPokemons } from "../../redux/pokemonsSlice";
import { useEffect } from "react";
import { useState } from "react";
import { orderOptions } from "../../redux/optionsSlice";
import styles from "./OrderBy.module.css";

const OrderBy = () => {
  const options = ["First id", "Last id", "Ascending", "Descending"];
  const pokemons = useSelector((state) => state.pokemons.pokemonsFiltered);
  const orderOp = useSelector((state) => state.options.orderBy);
  const [selectedOption, setSelectedOption] = useState(orderOp);
  const dispatch = useDispatch();
  const handleOrderChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    dispatch(orderOptions(selectedOption));
    dispatch(orderPokemons(selectedOption));
  }, [pokemons, dispatch, selectedOption]);

  return (
    <div>
      <select
        className={styles.select}
        name="orderBy"
        id="orderBy"
        onChange={handleOrderChange}
        value={selectedOption}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              Order by {option.toLowerCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default OrderBy;
