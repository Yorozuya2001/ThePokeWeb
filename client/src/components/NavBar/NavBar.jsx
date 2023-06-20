import styles from "./NavBar.module.css";
import source from "../../assets/loader.gif";
const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img className={styles.imageLogo} src={source} alt="pikachu" />
      </div>
      <nav className={styles.navBar}>
        <ul className={styles.ul}>
          <li>PokeWeb</li>
          <li>Create your Pokemon</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
