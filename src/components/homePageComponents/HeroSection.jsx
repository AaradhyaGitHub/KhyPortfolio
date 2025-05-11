import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const heroImg =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950197/land2_obmlaa.jpg";

  return (
    <main className={styles.heroContainer}>
      <img src={heroImg} alt="Downtown Sacramento Skyline" />
      <div className={styles.heroText}>
        <h1>Khy Rodriguez</h1>
        <p>Filmmaker | Photographer</p>
      </div>
    </main>
  );
}
