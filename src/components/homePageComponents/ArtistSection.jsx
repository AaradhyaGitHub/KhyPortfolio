import { Link } from "react-router-dom";
import styles from "./ArtistSection.module.css";

export default function ArtistSection() {
  const artistImage =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951506/grad1_on6zll.jpg";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Image Side */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <img
              src={artistImage}
              alt="Khy Rodriguez"
              className={styles.image}
            />
          </div>
        </div>

        {/* Content Side */}
        <div className={styles.content}>
          <span className={styles.label}>Meet the Artist</span>
          <h2 className={styles.name}>Khy Rodriguez</h2>
          
          <p className={styles.bio}>
            A visual storyteller with an eye for the extraordinary in the ordinary. 
            Through the lens, every moment becomes a narrative waiting to be told.
          </p>
          
          <p className={styles.tagline}>
            "Khy's creativity knows no bounds—unlike his femurs, which gave up halfway."
          </p>

          <Link to="/about" className={styles.button}>
            <span>Learn More</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}