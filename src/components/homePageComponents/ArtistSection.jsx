import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArtistSection.module.css";

// Import the images

import artistMain from "../../assets/Photos/Artist/hero2.jpg";
import artistBackground from "../../assets/Photos/Artist/bgvert.jpg";

import portraitPic from "../../assets/Photos/Portrait/portrait4.jpg";
import streetPic from "../../assets/Photos/Landscape/land1.jpg";
import fashionPic from "../../assets/Photos/Fashion/editorial12.jpg";
import gradPic from "../../assets/Photos/Grad/grad4.jpg";

export default function ArtistSection() {
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
          Khy’s creativity knows no bounds—unlike his femurs, which gave up halfway."
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
