import { Link } from "react-router-dom";
import styles from "./ArtistSection.module.css";

export default function ArtistSection() {
  /* ============================================
     ARTIST IMAGE CONFIGURATION
     
     For MOBILE card: Use 4:5 image with darker bottom
     For DESKTOP: Regular portrait image works fine
     ============================================ */
  const artistImage =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1767261884/DSCF0533_tlxifk.jpg";
  //"https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1767261884/DSCF0533_tlxifk.jpg"
  return (
    <section className={styles.section}>
      {/* ============================================
          SECTION TITLE - Shows on both mobile & desktop
          ============================================ */}
      <h2 className={styles.sectionTitle}>Meet the Artist</h2>

      {/* ============================================
          MOBILE LAYOUT: Card with text overlay
          Only visible on screens < 768px
          ============================================ */}
      <div className={styles.mobileCard}>
        <div className={styles.card}>
          <img
            src={artistImage}
            alt="Khy Rodriguez"
            className={styles.cardImage}
          />
          <div className={styles.gradientOverlay} />

          {/* Text content on image */}
          <div className={styles.cardContent}>
            <h3 className={styles.cardName}>Khy Rodriguez</h3>
            <p className={styles.cardBio}>
              A visual storyteller with an eye for the extraordinary in the
              ordinary. Through the lens, every moment becomes a narrative
              waiting to be told.
            </p>
          </div>

          {/* Shiny button - bottom right */}
          <Link to="/about" className={styles.shinyButton}>
            <span className={styles.buttonText}>Learn More ➜ </span>
            <span className={styles.buttonShine} />
          </Link>
        </div>
      </div>

      {/* ============================================
          DESKTOP LAYOUT: Two-column (image + text)
          Only visible on screens >= 768px
          ============================================ */}
      <div className={styles.desktopLayout}>
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
            <h2 className={styles.name}>Khy Rodriguez</h2>

            <p className={styles.bio}>
              I’m a visual storyteller driven by curiosity and creative flair.
            </p>

            <p className={styles.bioExtended}>
              Through my lens, I turn simple moments into narratives that linger
              and resonate.
            </p>

            <p className={styles.tagline}>
              I aim to bring your ideas to life, blending them with my
              perspective to create images that are both authentic and
              unforgettable.
            </p>

            <Link to="/about" className={styles.button}>
              <span>Learn More</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
