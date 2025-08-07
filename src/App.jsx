import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <Navbar />
        <div className={styles.picContainer}>
          <h1 className={styles.heading}>Kristoffersen MGMT</h1>
          <div className={styles.buttonContainer}>
            <Button classname={styles.contactButton}>Contact</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
