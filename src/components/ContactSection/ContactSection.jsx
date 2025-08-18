import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  const [mapLoading, setMapLoading] = useState(true);

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <div className={styles.infoSection}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <p className={styles.bio}>
            If you have any questions regarding events, bookings, or
            collaborations, don’t hesitate to reach out.
          </p>

          <ul className={styles.services}>
            <li>🎵 Booking og artist management</li>
            <li>📍 Lokasjon- og eventplanlegging</li>
            <li>🎤 DJ-sett og live-opptredener</li>
            <li>🤝 Samarbeid og partnerskap</li>
          </ul>

          <div className={styles.availability}>
            <h4>Available</h4>
            <p>Mon – Fri: 10:00 – 18:00</p>
            <p>Weekend: By appointment</p>
          </div>

          <div className={styles.contactDetails}>
            <h3>Sebastian Kristoffersen</h3>
            <p>Artist Manager</p>
            <p>
              Email:{" "}
              <a href="mailto:sebastian@kristoffersenmgmt.no">
                sebastian@kristoffersenmgmt.no
              </a>
            </p>
            <p>Mobile: +47 91511981</p>
            <p>Location: Oslo, Norway</p>
          </div>
        </div>

        <div className={styles.mapContainer}>
          {mapLoading && (
            <div className={styles.mapLoader}>
              <Spinner spinnerClassName={styles.loadingCircle} />
            </div>
          )}
          <iframe
            title="Google Maps - Oslo"
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81944.42248702096!2d10.67983095!3d59.9114914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e62dfb76c33%3A0x9c0e3461fd2f7d65!2sOslo!5e0!3m2!1sen!2sno!4v1691075400000!5m2!1sen!2sno"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoading(false)}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
