import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ id, pokemon, types, image }) => {
  console.log(id, image, pokemon, types);
  console.log("test");
  return (
    <div className={` ${types[0]} ${styles.card}`}>
      <img className={styles.cardImage} src={image} alt={pokemon} />
      <div className={styles.cardInfoContainer}>
        <h2 className={styles.id}>#{id}</h2>
        <h3 className={styles.pokemon}>{pokemon}</h3>
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
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pokemon: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
