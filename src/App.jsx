import styles from "./App.module.css";
import Button from "./components/Button/Button";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import useScrollToSection from "./hooks/useScrollToSection";

const App = () => {
  const handleScrollToContact = () => {
    useScrollToSection("contact");
  };

  return (
    <div className={styles.rootContainer}>
      <Navbar />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.picContainer}>
              <div className={styles.headingWrapper}>
                <img
                  src="/assets/images/logo.jpg"
                  alt="Company logo"
                  className={styles.logo}
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  classname={styles.contactButton}
                  onClick={handleScrollToContact}
                >
                  Book en samtale
                </Button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section id="contact" className={styles.contactSection}>
            <h2 className={styles.contactHeading}>Kontakt oss</h2>
            <p className={styles.contactDescription}>
              For henvendelser, samarbeidsmuligheter eller for å avtale en
              samtale. Ta kontakt via skjemaet under.
            </p>
            <ContactForm />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
