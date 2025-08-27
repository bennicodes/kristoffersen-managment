import React from "react";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitles";
import styles from "./Contact.module.css";

const Contact = () => {
  usePageTitle("Contact - Kristoffersen MGMT");
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
