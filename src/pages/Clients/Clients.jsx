import Navbar from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitles";
import styles from "./Clients.module.css";

const Clients = () => {
  usePageTitle("Clients - Kristoffersen MGMT");
  return (
    <div className={styles.rootContainer}>
      <header>
        <Navbar />
      </header>
    </div>
  );
};

export default Clients;
