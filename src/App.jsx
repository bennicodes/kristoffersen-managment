import styles from "./App.module.css";
import Button from "./components/Button/Button";
import ContactForm from "./components/ContactForm/ContactForm";
import Navbar from "./components/navbar/Navbar";
import useScrollToSection from "./hooks/useScrollToSection";

const App = () => {
  const handleScrollToContact = () => {
    useScrollToSection("contact");
  };

  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <Navbar />
        <div className={styles.picContainer}>
          <h1 className={styles.heading}>Kristoffersen MGMT</h1>
          <div className={styles.buttonContainer}>
            <Button
              classname={styles.contactButton}
              onClick={handleScrollToContact}
            >
              Book a call
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section id="contact" className={styles.contactSection}>
          <h2 className={styles.contactHeading}>Contact Us</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default App;
