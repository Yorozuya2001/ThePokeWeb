import Cards from "../Cards/Cards";
import styles from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Types from "../Types/Types";
import OrderBy from "../OrderBy/OrderBy";
import { useState } from "react";
import SelectImage from "../SelectImage/SelectImage";

const Home = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [filterOff, setFilterOff] = useState(false);
  const [spriteOption, setSpriteOption] = useState(false);

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.inputs}>
          <SearchBar />

          <OrderBy />
          <Types
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            setFilterOff={setFilterOff}
            filterOff={filterOff}
          />
          <SelectImage
            spriteOptionState={spriteOption}
            setSpriteOption={setSpriteOption}
          />
        </div>
      </div>
      <div className={styles.containerOfDivCards}>
        <Cards />
      </div>
    </>
  );
};

export default Home;
