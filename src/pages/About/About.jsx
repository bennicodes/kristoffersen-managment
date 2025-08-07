import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <AboutIntro />
      </main>
    </div>
  );
};

export default About;
