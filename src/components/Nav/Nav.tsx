import styles from "./Nav.module.css";
// Icons
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
// Imgs
import logo from "../../assets/img/logo_ecommerce.jpeg";

const Nav = () => {
  return (
    <nav className={styles.cont_Nav}>
      <img className={styles.logo} src={logo} alt="" />
      <ul className={styles.cont_Ul}>
        <li className={styles.cont_li}>
          <a className={styles.link} href="#descuentos">
            Descuentos
          </a>
        </li>
        <li className={styles.cont_li}>
          <a className={styles.link} href="#categorias">
            Productos
          </a>
        </li>
        <li className={styles.cont_li}>
          <a className={styles.link} href="#nosotros">
            Nosotros
          </a>
        </li>
        <li className={styles.cont_li}>
          <a className={styles.link} href="#contacto">
            Contacto
          </a>
        </li>
      </ul>

      <div className={styles.cont_buttons}>
        <button className={styles.button_cart}>
          <CiHeart size={32} />
        </button>
        <button className={styles.button_cart}>
          <BsCart4 size={31} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
