import React from "react";
import styles from "./AboutIntro.module.css";

const AboutIntro = () => {
  const calculateAge = () => {
    const birthDate = new Date("2000-07-31"); // <-- replace with Sebastian's real birthdate
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // if birthday hasn’t happened yet this year → subtract 1
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>About KRISTOFFERSEN MGMT</h1>
          <p>
            Kristoffersen MGMT is a Norwegian management company, founded by
            Sebastian Kristoffersen. We focus on developing long-term careers
            for artists, with a hands-on approach and a deep understanding of
            the music industry.
          </p>

          <h2>Our Journey</h2>
          <p>
            Sebastian Kristoffersen ({calculateAge()}) began his career in the
            music business in 2025, alongside his friend and artist SAUL. With a
            strong start, he successfully signed SAUL to Universal Music Group
            Norway with the debut single “UTÅLMODIG”, which is now approaching
            100,000 streams on Spotify.
          </p>

          <h2>Our Artist: SAUL</h2>
          <p>
            SAUL is a Norwegian Pop/R&amp;B artist based in Oslo, known for
            songs like <em>UTÅLMODIG</em>, <em>KRANGLER I PARIS</em>, and{" "}
            <em>VESTKANTTALK</em>. 2025 is just the beginning — we have several
            exciting projects lined up in the coming months.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/assets/images/seb-manager.JPG"
            alt="SAUL"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
