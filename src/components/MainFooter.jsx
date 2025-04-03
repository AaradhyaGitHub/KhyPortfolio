import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';
import styles from './MainFooter.module.css';

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.divider}></div>
        
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            Copyright © 2018—{new Date().getFullYear()} Khy Rodriguez. All Rights Reserved
          </div>
          
          <div className={styles.contact}>
            Contact: <a href="mailto:placeholder@example.com">placeholder@example.com</a>
          </div>
          
          <div className={styles.socials}>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaTiktok />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaYoutube />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className={styles.credits}>
          Designed by <a href="https://example.com" className={styles.creditLink}>AP</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;