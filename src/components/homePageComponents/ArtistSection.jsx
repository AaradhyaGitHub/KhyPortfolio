import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArtistSection.module.css";

export default function ArtistSection() {
  // Using graduation images as placeholders for artist images
  const artistMain =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951506/grad1_on6zll.jpg";
  const artistBackground =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951509/grad2_bsdoza.jpg";

  // Other photos from your gallery
  const portraitPic =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950634/portrait4_osypd2.jpg";
  const streetPic =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746950189/land1_t2rsxu.jpg";
  const fashionPic =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951479/editorial12_gdzhqa.jpg";
  const gradPic =
    "https://res.cloudinary.com/de3cxnkuw/image/upload/f_auto,q_auto/v1746951514/grad4_xiwdf3.jpg";

  return (
    <div
      className={styles.artistSection}
      style={{ backgroundImage: `url(${artistBackground})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.contentContainer}>
        <div className={styles.headerText}>
          <h3>MEET THE ARTIST</h3>
          <h2>Khy Rodriguez</h2>
          <p>
            Khy's creativity knows no bounds—unlike his femurs, which gave up
            halfway.
          </p>
          <Link to="/about" className={styles.discoverButton}>
            Learn More
          </Link>
        </div>

        <div className={styles.imagesLayout}>
          {/*
          <div className={styles.leftImages}>
            <div
              className={styles.leftTopImage}
              style={{ backgroundImage: `url(${streetPic})` }}
            ></div>
            <div
              className={styles.leftBottomImage}
              style={{ backgroundImage: `url(${gradPic})` }}
            ></div>
            <div
              className={styles.leftMiddleImage}
              style={{ backgroundImage: `url(${fashionPic})` }}
            ></div>
          </div>
          */}

          <div
            className={styles.centerImage}
            style={{ backgroundImage: `url(${artistMain})` }}
          ></div>

          {/*
            <div className={styles.rightImages}>
            <div
              className={styles.rightTopImage}
              style={{ backgroundImage: `url(${portraitPic})` }}
            ></div>
            <div
              className={styles.rightBottomImage}
              style={{ backgroundImage: `url(${streetPic})` }}
            ></div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
