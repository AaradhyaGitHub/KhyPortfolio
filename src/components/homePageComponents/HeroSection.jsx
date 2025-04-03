import styles from "./HeroSection.module.css"; // Import CSS module
import heroImg from "../../assets/Photos/Landscape/land2.jpg"; // Fix image import

export default function HeroSection() {
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
