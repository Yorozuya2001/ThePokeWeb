import PropTypes from "prop-types";
import styles from "./Card.module.css";
import DefaultImageSource from "../../assets/not-image.png";
import { Link } from "react-router-dom";

const Card = ({ id, pokemon, types, image }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className={` ${types[0]} ${styles.card}`}>
        {image ? (
          <img className={styles.cardImage} src={image} alt={pokemon} />
        ) : (
          <img
            className={styles.cardImage}
            src={DefaultImageSource}
            alt={pokemon}
          />
        )}
        <div className={styles.cardInfoContainer}>
          <h2 className={styles.id}>#{id}</h2>
          <h3 className={styles.pokemon}>
            {pokemon.substring(0, 16)}
            {pokemon.length > 16 && "..."}
          </h3>
          <ul className={styles.ul}>
            {types.map((type, index) => {
              return (
                <li key={index}>
                  {type}
                  <img
                    className={styles.typeIcon}
                    src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`}
                    alt={type}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pokemon: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
};

export default Card;
