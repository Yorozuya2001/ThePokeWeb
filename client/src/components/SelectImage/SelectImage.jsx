import styles from "./SelectImage.module.css";
import PokeBallSource from "../../assets/pokeball.png";

const SelectImage = () => {
  return (
    <div className={styles.typeImageContainer}>
      <img className={styles.typeImage} src={PokeBallSource} alt="PokeBall" />
    </div>
  );
};

export default SelectImage;
