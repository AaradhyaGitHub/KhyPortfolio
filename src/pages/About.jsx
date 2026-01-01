import styles from "./About.module.css";

export default function About() {
  const mainImage =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/v1767263308/DSCF0190_fxkw6b.jpg";

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        {/* Hero Section */}
        <header className={styles.header}>
          <div className={styles.imageWrapper}>
            <img
              src={mainImage}
              alt="Khy Rodriguez"
              className={styles.mainImage}
            />
          </div>
          
          <div className={styles.headerContent}>
            <span className={styles.label}>About</span>
            <h1 className={styles.title}>Khy Rodriguez</h1>
            <p className={styles.subtitle}>Filmmaker & Photographer</p>
          </div>
        </header>

        {/* Content */}
        <article className={styles.content}>
          {/* Vision Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Vision</h2>
            <p>
              Khy Rodriguez is a photographer and filmmaker driven by curiosity—a relentless desire to explore, experiment, and uncover the extraordinary in the everyday. 
            </p>
            <p>
              Every image he creates carries the depth of thoughtful observation, paired with a modern, inventive eye that transforms simple moments into compelling stories.
            </p>
            <p>
              Whether capturing a fleeting glance, a sweeping landscape, or an intimate portrait, Khy approaches each frame with both patience and passion, ensuring that every story is told with authenticity and artistic flair.
            </p>
          </div>

          {/* Approach Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Approach</h2>
            <p>
              Known for his follow-through as much as his creativity, Khy brings both dedication and adaptability to every project. 
            </p>
            <p>
              He listens, collaborates, and elevates the ideas of those he works with, while never losing sight of his own artistic vision. Working with him is both effortless and inspiring—he’s the kind of creative partner who encourages experimentation while delivering on the story you set out to tell.
            </p>
            <p>
              His work is a balance of structure and spontaneity, where technical skill meets curiosity. From meticulously planned shots to impromptu adventures, Khy ensures each project captures a unique perspective, enriched with his signature creative touch.
            </p>
          </div>

          {/* Signature Section */}
          <div className={styles.signature}>
            <svg
              viewBox="0 0 100 30"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.signatureSvg}
            >
              <path
                d="M10,20 C15,10 25,15 30,20 C35,25 40,15 50,10 C60,5 70,15 80,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </article>
      </div>
    </div>
  );
}
