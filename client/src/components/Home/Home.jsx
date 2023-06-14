import Cards from "../Cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.containerOfDivCards}>
      <Cards />
    </div>
  );
};

export default Home;
