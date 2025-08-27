// src/pages/Media/Media.jsx
import { mediaItems } from "../../data/mediaItems/saul";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitles";
import styles from "./Media.module.css";

export default function Media() {
  usePageTitle("Media - Kristoffersen MGMT");

  return (
    <div className={styles.root}>
      <header>
        <Navbar />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Media</h1>

        <ul className={styles.grid}>
          {mediaItems.map((it) => (
            <li key={it.id} className={styles.item}>
              {it.type === "video" ? (
                <video
                  className={styles.mediaVideo}
                  src={it.src}
                  poster={it.poster}
                  controls
                  preload="metadata"
                  playsInline
                />
              ) : (
                <img
                  className={styles.mediaImg}
                  src={it.src}
                  alt={it.alt || ""}
                  loading="lazy"
                />
              )}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
