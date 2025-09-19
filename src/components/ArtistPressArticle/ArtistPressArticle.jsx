import { useEffect, useState } from "react";
import { client } from "../../config/sanityConfig";
import styles from "./ArtistPressArticle.module.css";

const ArtistPressArticle = () => {
  const [pressItems, setPressItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "press"] | order(date desc){
         _id,
        title,
        date,
        source,
        link,
        "image": image.asset->url
      }`;
        const data = await client.fetch(query);
        setPressItems(data);
      } catch (error) {
        console.error("Failed to fetch press items:", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) =>
    dateString
      ? new Date(dateString).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  return (
    <section className={styles.pressSection}>
      <div className={styles.background}></div>
      <h1 className={styles.heading}>Presse</h1>

      <div className={styles.pressList}>
        {pressItems.length === 0 ? (
          <p className={styles.noPressMessage}>
            Ingen presseoppslag tilgjengelig.
          </p>
        ) : (
          pressItems.map((item) => (
            <article key={item._id} className={styles.pressCard}>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.source && (
                  <p className={styles.source}>Kilde: {item.source}</p>
                )}
                <p className={styles.date}>{formatDate(item.date)}</p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.readMore}
                  >
                    Les mer →
                  </a>
                )}
              </div>

              {item.image && (
                <div className={styles.media}>
                  <img
                    src={item.image}
                    alt="Article image"
                    className={styles.mediaImg}
                    loading="lazy"
                  />
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default ArtistPressArticle;
