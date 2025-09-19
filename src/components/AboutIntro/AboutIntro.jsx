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
          <h1>Om KRISTOFFERSEN MGMT</h1>
          <p>
            Kristoffersen MGMT er et norsk managementselskap, grunnlagt av
            Sebastian Kristoffersen. Vi fokuserer på å utvikle langsiktige
            karrierer for artister, med en praktisk tilnærming og en dyp
            forståelse av musikkbransjen.
          </p>

          <h2>Vår reise</h2>
          <p>
            Sebastian Kristoffersen ({calculateAge()}) startet sin karriere i
            musikkbransjen i 2025, sammen med sin venn og artist SAUL. Med en
            sterk start signerte han SAUL til Universal Music Group Norway med
            debutsingelen «UTÅLMODIG», som nå har passert 100 000 avspillinger
            på Spotify.
          </p>

          <h2>Vår artist: SAUL</h2>
          <p>
            SAUL er en norsk Pop/R&amp;B-artist basert i Oslo, kjent for låter
            som <em>UTÅLMODIG</em>, <em>KRANGLER I PARIS</em> og{" "}
            <em>VESTKANTTALK</em>. 2025 er bare begynnelsen — vi har flere
            spennende prosjekter på vei i de kommende månedene.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/assets/images/seb-manager.JPG"
            alt="manager sebastian kristoffersen"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
