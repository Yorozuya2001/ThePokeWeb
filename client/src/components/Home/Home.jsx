import Cards from "../Cards/Cards";
import styles from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className={styles.containerOfDivCards}>
        <Cards />
      </div>
    </>
  );
};

export default Home;
