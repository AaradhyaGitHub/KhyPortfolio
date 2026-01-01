import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  const heroImg =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950197/land2_obmlaa.jpg";

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.imageWrapper}>
        <img 
          src={heroImg} 
          alt="Downtown Sacramento Skyline" 
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
        <h1 className={styles.name}>
          <span className={styles.firstName}>Khy</span>
          <span className={styles.lastName}>Rodriguez</span>
        </h1>
        <p className={styles.tagline}>Filmmaker & Photographer</p>
        
        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}