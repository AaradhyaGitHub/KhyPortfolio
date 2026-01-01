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
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Vision</h2>
            <p>
              I am a visual poet who speaks through shadows and light. My camera
              becomes an extension of perception, capturing those fleeting moments
              when the world reveals its most authentic self. There's a particular
              stillness I seek—that perfect balance where time seems suspended and
              the landscape breathes with its own quiet rhythm.
            </p>
            <p>
              Each image is a conversation between myself and the environment, 
              a dialogue that often begins long before sunrise and continues 
              well after the last light fades.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Approach</h2>
            <p>
              My work is rooted in patience and presence. I find myself drawn to the
              overlooked corners of our natural world, those liminal spaces where
              beauty emerges unexpectedly. The photographs I create are not mere
              documentation but rather invitations—gentle beckoning to slow down, 
              to notice, to wonder.
            </p>
            <p>
              Through careful composition and an almost obsessive attention to the 
              quality of light, I strive to distill complex emotional landscapes 
              into visual form, creating images that resonate on a level beyond 
              the merely aesthetic.
            </p>
          </div>

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