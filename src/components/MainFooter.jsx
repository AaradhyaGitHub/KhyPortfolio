import React, { useState, useEffect } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import styles from "./MainFooter.module.css";

const MainFooter = () => {
  const [hover, setHover] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  // Update year automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 60000 * 60 * 24); // Check once per day
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/",
      name: "instagram"
    },
    { icon: <FaTiktok />, href: "https://tiktok.com/", name: "tiktok" },
    { icon: <FaYoutube />, href: "https://youtube.com/", name: "youtube" },
    { icon: <FaTwitter />, href: "https://twitter.com/", name: "twitter" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.gradientDivider}></div>

      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            <span className={styles.copyrightSymbol}>©</span> {year} Khy
            Rodriguez
          </div>

          <div className={`${styles.contact} ${styles.pulseAnimation}`}>
            <span>Contact:</span>
            <a
              href="mailto:placeholder@example.com"
              className={styles.emailLink}
              onMouseEnter={() => setHover("email")}
              onMouseLeave={() => setHover("")}
            >
              placeholder@example.com
              <span
                className={`${styles.underline} ${
                  hover === "email" ? styles.active : ""
                }`}
              ></span>
            </a>
          </div>

          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                onMouseEnter={() => setHover(social.name)}
                onMouseLeave={() => setHover("")}
              >
                <div
                  className={`${styles.iconContainer} ${
                    hover === social.name ? styles.hover : ""
                  }`}
                >
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.credits}>
          <a
            href="https://linkedin.com/in/aaradhya-poudyal-202020/"
            target="_blank" // This opens the link in a new tab
            rel="noopener noreferrer" // This is a security best practice when using target="_blank"
            className={styles.creditLink}
            onMouseEnter={() => setHover("credit")}
            onMouseLeave={() => setHover("")}
          >
            Designed By: AP
            <span
              className={`${styles.underline} ${
                hover === "credit" ? styles.active : ""
              }`}
            ></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
