import ArtistSection from "../components/homePageComponents/ArtistSection";
import HeroSection from "../components/homePageComponents/HeroSection";
import HomeGallery from "../components/homePageComponents/HomeGallery";
import styles from './Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <HomeGallery />
      <ArtistSection />
    </div>
  );
}
