import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import clients from "../../data/clients";
import { usePageTitle } from "../../hooks/usePageTitles";
import styles from "./Clients.module.css";

const Clients = () => {
  usePageTitle("Clients - Kristoffersen MGMT");

  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Clients</h1>
          <div className={styles.grid}>
            {clients.map((client, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={client.image}
                    alt={client.name}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <a
                      href={client.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      href={client.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotify
                    </a>
                    <Link to={`/clients/${client.slug}`}>See more</Link>
                  </div>
                </div>
                <h2 className={styles.name}>{client.name}</h2>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
