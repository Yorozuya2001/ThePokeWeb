import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  return (
    <div className={styles.cardsContainer}>
      {pokemons.length &&
        pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              pokemon={pokemon.name}
              types={pokemon.types}
              image={pokemon.image}
            />
          );
        })}
    </div>
  );
};

export default Cards;
