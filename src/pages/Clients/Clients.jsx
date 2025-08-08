import Navbar from "../../components/navbar/Navbar";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <div className={styles.rootContainer}>
      <header>
        <Navbar />
      </header>
    </div>
  );
};

export default Clients;
