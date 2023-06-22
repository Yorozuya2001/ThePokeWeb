import styles from "./NavBar.module.css";
import source from "../../assets/loader.gif";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <div className={styles.imageContainer}>
          <img className={styles.imageLogo} src={source} alt="pikachu" />
        </div>
      </Link>

      <nav className={styles.navBar}>
        <ul className={styles.ul}>
          <Link to="/home">PokeWeb</Link>
          <Link style={{ opacity: "0.5" }}>Create your Pokemon</Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
