import React from "react";
import styles from "./AboutIntro.module.css";

const AboutIntro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>About Dennis Kiil</h1>
          <p>
            Dennis Kiil is the founder and driving force behind KIIL MGMT,
            passionately managing artists and helping them grow organically in
            both the Norwegian and international music scene.
          </p>

          <h2>Our Vision</h2>
          <p>
            We believe in long-term artist development, focusing on
            authenticity, connection, and international growth.
          </p>

          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals dedicated to
            nurturing talent and building meaningful careers in music.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/assets/images/DJ-black-white.jpeg"
            alt="Dennis Kiil"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
