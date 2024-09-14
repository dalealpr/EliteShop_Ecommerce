import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.cont_homePage}>
      <Nav />
      <Header />
      <Footer />
    </div>
  );
};

export default HomePage;
