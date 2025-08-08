import Navbar from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitles";
import styles from "./Media.module.css";

const Media = () => {
  usePageTitle("Media - Kristoffersen MGMT");
  return (
    <div className={styles.rootContainer}>
      <header>
        <Navbar />
      </header>
    </div>
  );
};

export default Media;
