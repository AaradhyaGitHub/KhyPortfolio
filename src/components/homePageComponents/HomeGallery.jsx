import { Link } from "react-router-dom";
import styles from "./HomeGallery.module.css";

const galleryItems = [
  {
    id: 1,
    image: "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950192/land7_gluzxy.jpg",
    title: "Landscape",
    path: "/gallery/landscape"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746949601/art4_tncpov.jpg",
    title: "Art",
    path: "/gallery/art"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950634/portrait4_osypd2.jpg",
    title: "Portraits",
    path: "/gallery/portrait"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/de3cxnkuw/image/upload/v1746950187/land8_ivff4j.jpg",
    title: "Street",
    path: "/gallery/street"
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951479/editorial12_gdzhqa.jpg",
    title: "Fashion",
    path: "/gallery/fashion"
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951514/grad4_xiwdf3.jpg",
    title: "Graduation",
    path: "/gallery/graduation"
  }
];

export default function HomeGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>
        
        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <Link 
              key={item.id} 
              to={item.path} 
              className={styles.item}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.viewMore}>
                  View Gallery
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}