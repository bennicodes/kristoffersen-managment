import styles from "./App.module.css";
import Button from "./components/Button/Button";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import useScrollToSection from "./hooks/useScrollToSection";

const App = () => {
  const handleScrollToContact = () => {
    useScrollToSection("contact");
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Navbar />
          <div className={styles.picContainer}>
            <div className={styles.headingWrapper}>
              <h1 className={styles.heading}>Kristoffersen MGMT</h1>
            </div>
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
            <p className={styles.contactDescription}>
              For business inquiries, collaboration opportunities, or to
              schedule a call — feel free to get in touch using the form below.
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
