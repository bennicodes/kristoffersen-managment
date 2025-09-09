import ArtistPressArticle from "../../components/ArtistPressArticle/ArtistPressArticle";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Press.module.css";

const Press = () => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>
        <ArtistPressArticle />
      </main>
      <Footer />
    </div>
  );
};

export default Press;
