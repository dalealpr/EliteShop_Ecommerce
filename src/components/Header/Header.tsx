import Carrusel from "../Carrusel/Carrusel";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.cont_Header}>
      <Carrusel />
    </div>
  );
};

export default Header;
