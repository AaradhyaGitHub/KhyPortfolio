import { Link } from "react-router-dom";
import styles from "./HomeGallery.module.css";

export default function HomeGallery() {
  const galleryItems = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950192/land7_gluzxy.jpg",
      title: "LANDSCAPE",
      path: "/gallery/landscape",
      className: `${styles.galleryItem} ${styles.item1}`
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746949601/art4_tncpov.jpg",
      title: "ART",
      path: "/gallery/art",
      className: `${styles.galleryItem} ${styles.item2}`
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950634/portrait4_osypd2.jpg",
      title: "PORTRAITS",
      path: "/gallery/portraits",
      className: `${styles.galleryItem} ${styles.item3}`
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950189/land1_t2rsxu.jpg",
      title: "STREET",
      path: "/gallery/street",
      className: `${styles.galleryItem} ${styles.item4}`
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951479/editorial12_gdzhqa.jpg",
      title: "FASHION",
      path: "/gallery/fashion",
      className: `${styles.galleryItem} ${styles.item5}`
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951514/grad4_xiwdf3.jpg",
      title: "GRADUATION",
      path: "/gallery/grad",
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
