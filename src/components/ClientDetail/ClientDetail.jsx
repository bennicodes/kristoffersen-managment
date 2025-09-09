import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import clients from "../../data/clients";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Spinner from "../Spinner/Spinner";
import styles from "./ClientDetail.module.css";

const ClientDetail = () => {
  const { slug } = useParams();
  const client = clients.find((c) => c.slug === slug);

  const [spotifyLoading, setSpotifyLoading] = useState(true);
  const [instagramLoading, setInstagramLoading] = useState(true);

  if (!client) {
    return (
      <div className={styles.rootContainer}>
        <Navbar />
        <main className={styles.main}>
          <h1 className={styles.title}>Client not found</h1>
          <Link to="/clients" className={styles.backLink}>
            ← Back to Clients
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.rootContainer}>
      <Navbar />
      <main className={styles.main}>
        <Link to="/clients" className={styles.backLink}>
          ← Back to Clients
        </Link>

        <h1 className={styles.title}>{client.name}</h1>

        <div className={styles.topSection}>
          
          <div className={styles.leftColumn}>
            <img
              src={client.image}
              alt={client.name}
              className={styles.image}
            />

            {spotifyLoading && (
              <Spinner spinnerClassName={styles.loadingCircle} />
            )}
            <iframe
              src={client.latestSong}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              onLoad={() => setSpotifyLoading(false)}
              className={styles.spotifyEmbed}
            ></iframe>
          </div>

          <div className={styles.rightColumn}>
            {client.bio.map((paragraph, index) => (
              <p key={index} className={styles.bio}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.embeds}>
          <div className={styles.embedBlock}>
            <h2>Instagram</h2>

            {instagramLoading && (
              <Spinner spinnerClassName={styles.loadingCircle} />
            )}
            <div className={styles.instagramContainer}>
              <iframe
                src={client.instagramEmbed}
                frameBorder="0"
                scrolling="no"
                className={styles.instagramEmbed}
                onLoad={() => setInstagramLoading(false)}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientDetail;
