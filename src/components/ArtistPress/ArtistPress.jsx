import { useEffect, useState } from "react";
import { client } from "../../config/sanityConfig";
import styles from "./ArtistPress.module.css";

const ArtistPress = () => {
  const [pressItems, setPressItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "press"] | order(date desc){
        _id,
        title,
        date,
        outlet,
        description,
        link,
        "backgroundImage": backgroundImage.asset->url
      }`;

      const data = await client.fetch(query);
      setPressItems(data);
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className={styles.pressSection}>
      <div className={styles.background}></div>
      <h2 className={styles.heading}>Press</h2>
      <div className={styles.pressList}>
        {pressItems.map((item) => (
          <div key={item._id} className={styles.pressCard}>
            {item.backgroundImage && (
              <div
                className={styles.cardBackground}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
            )}
            <h3>{item.title}</h3>
            {item.outlet && (
              <p className={styles.outlet}>Source: {item.outlet}</p>
            )}
            <p className={styles.date}>{formatDate(item.date)}</p>
            <p className={styles.description}>{item.description}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Read More →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistPress;
