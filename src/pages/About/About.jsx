import React from "react";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import Navbar from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitles";
import styles from "./About.module.css";

const About = () => {
  usePageTitle("About - Kristoffersen MGMT");
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
