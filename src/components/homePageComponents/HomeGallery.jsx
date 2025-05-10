import artPic from "../../assets/Photos/Art/art4.jpg";
import landPic from "../../assets/Photos/Landscape/land7.jpg";
import portraitPic from "../../assets/Photos/Portrait/portrait4.jpg";
import streetPic from "../../assets/Photos/Landscape/land1.jpg";
import fashionPic from "../../assets/Photos/Fashion/editorial12.jpg";
import gradPic from "../../assets/Photos/Grad/grad4.jpg";
import { Link } from "react-router-dom";
import styles from "./HomeGallery.module.css";

export default function HomeGallery() {
  const galleryItems = [
    {
      id: 1,
      image: landPic,
      title: "LANDSCAPE",
      path: "/gallery/landscape", // Updated path
      className: `${styles.galleryItem} ${styles.item1}`
    },
    {
      id: 2,
      image: artPic,
      title: "ART",
      path: "/gallery/art", // Updated path
      className: `${styles.galleryItem} ${styles.item2}`
    },
    {
      id: 3,
      image: portraitPic,
      title: "PORTRAITS",
      path: "/gallery/portraits", // Updated path
      className: `${styles.galleryItem} ${styles.item3}`
    },
    {
      id: 4,
      image: streetPic,
      title: "STREET",
      path: "/gallery/street", // Updated path
      className: `${styles.galleryItem} ${styles.item4}`
    },
    {
      id: 5,
      image: fashionPic,
      title: "FASHION",
      path: "/gallery/fashion", // Updated path
      className: `${styles.galleryItem} ${styles.item5}`
    },
    {
      id: 6,
      image: gradPic,
      title: "GRADUATION",
      path: "/gallery/grad", // Updated path
      className: `${styles.galleryItem} ${styles.item6}`
    }
  ];

  return (
    <div className={styles.gallery}>
      {galleryItems.map((item) => (
        <div key={item.id} className={item.className}>
          <div className={styles.imageContainer}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <Link to={item.path} className={styles.seeMore}>
              SEE MORE
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
