import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Contact */}
        <section className={styles.contactSection}>
          <h3 className={styles.heading}>Kontakt</h3>
          <ul className={styles.list}>
            <li>
              <a href="mailto:booking@kristoffersenmgmt.com">
                sebastian@kristoffersenmgmt.no
              </a>
            </li>
            <li>
              <a href="tel:+4791511981">+47 915 11 981</a>
            </li>
            <li>Oslo, Norway</li>
          </ul>
        </section>

        {/* Copyright / quick links */}
        <section className={styles.copyrightSection}>
          <h3 className={styles.heading}>Kristoffersen MGMT</h3>
          <p className={styles.copy}>
            © {year} Kristoffersen MGMT. All rights reserved.
          </p>
        </section>

        {/* Social */}
        <section className={styles.socialSection}>
          <h3 className={`${styles.heading} ${styles.socialHeading}`}>
            Sosiale medier
          </h3>
          <ul className={styles.socialList}>
            <li>
              <a
                href="https://www.instagram.com/sebastiankristoffersen/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img
                  src="/assets/images/instagram.png"
                  alt="Instagram logo"
                  className={styles.instagramLogo}
                />
                <p className={styles.instagramHandle}>sebastiankristoffersen</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
