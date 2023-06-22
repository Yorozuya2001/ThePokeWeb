import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useEffect, useState } from "react";

const Cards = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemonsFiltered);
  const sprite = useSelector((state) => state.options.sprite);
  const cardsPerPage = 12;
  const [pagesNumbers, setPagesNumbers] = useState(0);
  const [pokemonsInPage, setPokemonsInPage] = useState([]);
  const [inPage, setInPage] = useState(1);

  useEffect(() => {
    let numberOfPages = Math.ceil(pokemons.length / cardsPerPage);
    setPagesNumbers(numberOfPages);
    setPokemonsInPage(pokemons.slice(0, cardsPerPage));
    setInPage(1);
  }, [pokemons]);

  const handleNext = () => {
    if (inPage >= 1 && inPage < pagesNumbers) {
      const nextPage = inPage + 1;
      setInPage(nextPage);
      setPokemonsInPage(
        pokemons.slice((nextPage - 1) * cardsPerPage, nextPage * cardsPerPage)
      );
    }
  };

  const handlePrev = () => {
    if (inPage > 1 && inPage <= pagesNumbers) {
      const prevPage = inPage - 1;
      setInPage(prevPage);
      setPokemonsInPage(
        pokemons.slice((prevPage - 1) * cardsPerPage, prevPage * cardsPerPage)
      );
    }
  };

  const firstPage = () => {
    setInPage(1);
    setPokemonsInPage(pokemons.slice(0, cardsPerPage));
  };

  const lastPage = () => {
    const lastPageIndex = pagesNumbers - 1;
    setInPage(lastPageIndex + 1);
    setPokemonsInPage(
      pokemons.slice(
        lastPageIndex * cardsPerPage,
        (lastPageIndex + 1) * cardsPerPage
      )
    );
  };

  return (
    <>
      <div className={styles.cardsContainer}>
        {pokemonsInPage.length &&
          pokemonsInPage.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                pokemon={pokemon.name}
                types={pokemon.types}
                image={pokemon[sprite]}
              />
            );
          })}
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={firstPage}>&lt;&lt;</button>
        <button onClick={handlePrev}>&lt;</button>
        <span>
          PAGE {inPage} OF {pagesNumbers}
        </span>
        <button onClick={handleNext}>&gt;</button>
        <button onClick={lastPage}>&gt;&gt;</button>
      </div>
    </>
  );
};

export default Cards;
