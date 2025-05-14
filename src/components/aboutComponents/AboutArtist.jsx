import React from "react";
import styles from "./AboutArtist.module.css";

export default function AboutArtist() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.frameElement}></div>
        <div className={styles.imageContainer}>
          <img
            src="https://source.unsplash.com/random/1200x800/?landscape,nature"
            alt="Landscape photography"
            className={styles.mainImage}
          />
          <p className={styles.caption}>
            — Chasing light in the wilderness, 2024 —
          </p>
        </div>
      </div>

      <article className={styles.content}>
        <h1 className={styles.title}>Through My Lens</h1>

        <div className={styles.divider}>
          <span className={styles.dividerDot}></span>
        </div>

        <p>
          I am a visual poet who speaks through shadows and light. My camera
          becomes an extension of perception, capturing those fleeting moments
          when the world reveals its most authentic self. There's a particular
          stillness I seek—that perfect balance where time seems suspended and
          the landscape breathes with its own quiet rhythm. Each image is a
          conversation between myself and the environment, a dialogue that often
          begins long before sunrise and continues well after the last light
          fades.
        </p>

        <p>
          My work is rooted in patience and presence. I find myself drawn to the
          overlooked corners of our natural world, those liminal spaces where
          beauty emerges unexpectedly. The photographs I create are not mere
          documentation but rather invitations—gentle beckoning to slow down, to
          notice, to wonder. Through careful composition and an almost obsessive
          attention to the quality of light, I strive to distill complex
          emotional landscapes into visual form, creating images that resonate
          on a level beyond the merely aesthetic.
        </p>
      </article>

      <div className={styles.signature}>
        <svg
          className={styles.svgSignature}
          viewBox="0 0 100 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,20 C15,10 25,15 30,20 C35,25 40,15 50,10 C60,5 70,15 80,20"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
