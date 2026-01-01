import HeroSection from "../components/homePageComponents/HeroSection";
import HomeGallery from "../components/homePageComponents/HomeGallery";
import ArtistSection from "../components/homePageComponents/ArtistSection";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <HomeGallery />
      <ArtistSection />
    </div>
  );
}