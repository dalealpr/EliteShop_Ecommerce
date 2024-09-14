import styles from "./Footer.module.css";
// Icons
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.cont_foot}>
      {/* REDES SOCIALES */}
      <div className={styles.cont_social}>
        <a href="#">
          <FaInstagram style={{ color: "#cacaca" }} size={35} />
        </a>
        <a href="#">
          <FaWhatsapp style={{ color: "#cacaca" }} size={35} />
        </a>
        <a href="#">
          <FaYoutube style={{ color: "#d9d9d9" }} size={35} />
        </a>
      </div>

      {/* FOOTER CONT */}
      <div className={styles.contFootC}>
        <ul className={styles.footUl}>
          <li>
            <a className={styles.footLink} href="">
              Politica de privacidad
            </a>
          </li>
          <li>
            <a className={styles.footLink} href="">
              Terminos y servicios
            </a>
          </li>
          <li>
            <a className={styles.footLink} href="">
              Sobre nosotros
            </a>
          </li>
        </ul>

        <p className={styles.footFText}>
          © 2024, EliteShop, Inc.
          <br /> EliteShop es marca comercial registrada de EliteShop, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
