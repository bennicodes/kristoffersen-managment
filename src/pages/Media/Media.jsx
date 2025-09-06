// src/pages/Media/Media.jsx
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { client } from "../../config/sanityConfig";
// import { mediaItems } from "../../data/mediaItems/saul";
import { usePageTitle } from "../../hooks/usePageTitles";
import styles from "./Media.module.css";

export default function Media() {
  const [items, setItems] = useState([]);
  usePageTitle("Media - Kristoffersen MGMT");

  useEffect(() => {
    const query = `*[_type == "mediaItem"] | order(coalesce(order, 9999) asc, _createdAt desc) {
      _id,
      type,
      "imageUrl": image.asset->url,
      "imageWidth": image.asset->metadata.dimensions.width,
      "imageHeight": image.asset->metadata.dimensions.height,
      "videoSrc": coalesce(videoFile.asset->url, videoUrl)
    }`;
    client.fetch(query).then(setItems).catch(console.error);
  }, []);

  return (
    <div className={styles.root}>
      <header>
        <Navbar />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Media</h1>

        <div className={styles.grid}>
          {items.map((it) => (
            <li key={it._id} className={styles.item}>
              {it.type === "video" && it.videoSrc ? (
                <video
                  className={styles.mediaVideo}
                  src={it.videoSrc}
                  controls
                  preload="metadata"
                  playsInline
                />
              ) : it.imageUrl ? (
                <img
                  className={`${styles.mediaImg} ${
                    it.imageWidth > it.imageHeight ? styles.landscape : ""
                  }`}
                  src={it.imageUrl}
                  alt="picture"
                  loading="lazy"
                />
              ) : null}
            </li>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
