import ArtistPress from "../../components/ArtistPressArticle/ArtistPressArticle";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Press.module.css";

const Press = () => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>
        <ArtistPress />
      </main>
    </div>
  );
};

export default Press;
