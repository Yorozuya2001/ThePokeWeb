import { useEffect, useState } from "react";
import styles from "./CardDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
import { URL } from "../../url";
import DefaultImageSource from "../../assets/not-image.png";

const CardDetail = () => {
  const { id } = useParams();
  const sprite = useSelector((state) => state.options.sprite);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`${URL}/pokemons/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Link to={"/home"} className={styles.backButton}>
        Back to PokeWeb
      </Link>
      <div className={styles.container}>
        {pokemonData && (
          <div
            className={`${styles.cardDetailContainer} ${pokemonData?.types[0]} `}
          >
            <div className={styles.pokemonContainer}>
              {pokemonData[sprite] ? (
                <img
                  className={styles.image}
                  src={pokemonData[sprite]}
                  alt={pokemonData.name}
                />
              ) : (
                <img
                  className={styles.image}
                  src={DefaultImageSource}
                  alt={pokemonData.name}
                />
              )}

              <h2>{pokemonData.name}</h2>
            </div>
            <div className={styles.statsContainer}>
              <div className={styles.physics}>
                <div>
                  <h4>Height</h4>
                  <p>{pokemonData.height}</p>
                </div>
                <div>
                  <h4>Weight</h4>
                  <p>{pokemonData.weight}</p>
                </div>
              </div>
              <h3 className={styles.statsTitle}>Stats</h3>
              <div className={styles.statsDataContainer}>
                {pokemonData.stats.map((stat, index) => {
                  return (
                    <div key={index}>
                      <h4>{stat.stat.name}</h4>
                      <CountUp
                        className={styles.stat}
                        start={0}
                        end={stat.base_stat}
                        duration={2}
                        separator=","
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardDetail;
