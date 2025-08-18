import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import clients from "../../data/clients";
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
            <p className={styles.bio}>{client.bio}</p>
          </div>
        </div>

        <div className={styles.embeds}>
          <div className={styles.embedBlock}>
            <h2>Latest Instagram Post</h2>

            {instagramLoading && (
              <Spinner spinnerClassName={styles.loadingCircle} />
            )}
            <iframe
              src={client.instagramEmbed}
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className={styles.instagramEmbed}
              onLoad={() => setInstagramLoading(false)}
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDetail;
