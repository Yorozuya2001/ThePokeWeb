import styles from "./SelectImage.module.css";
import PokeBallSource from "../../assets/pokeball.png";
import { useSelector, useDispatch } from "react-redux";
import { spriteOption } from "../../redux/optionsSlice";

const SelectImage = ({ spriteOptionState, setSpriteOption }) => {
  const pikachu = useSelector((state) => state.pokemons.pikachu);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(spriteOption(event.target.alt));
  };

  return (
    <div className={styles.typeImageContainer}>
      <img
        className={styles.typeImage}
        src={PokeBallSource}
        alt="PokeBall"
        onClick={() => setSpriteOption(!spriteOptionState)}
      />
      <div
        className={`${styles.spritesContainer} ${
          !spriteOptionState && styles.displayNone
        }`}
      >
        <h3>choose a pokémon sprite</h3>
        <div className={styles.sprites}>
          <img src={pikachu?.home} alt="home" onClick={handleClick} />
          <img
            src={pikachu?.dream_world}
            alt="dream_world"
            onClick={handleClick}
          />
          <img
            src={pikachu?.official_artwork}
            alt="official_artwork"
            onClick={handleClick}
          />
          <img src={pikachu?.default} alt="default" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default SelectImage;
