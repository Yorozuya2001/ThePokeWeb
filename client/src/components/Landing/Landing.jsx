import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import sourceGIF from "../../assets/landing_welcome.gif";

const Landing = () => {
  return (
    <div className={styles.landingcontainer}>
      <h1 className={styles.landingTitle}>Welcome to the Poke Web!</h1>
      <img className={styles.landingGIF} src={sourceGIF} alt="pikachu" />
      <Link to="/home" className={styles.landingButton}>
        Get Started
      </Link>
    </div>
  );
};

export default Landing;
