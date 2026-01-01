import { useEffect, useCallback } from "react";
import styles from "./Lightbox.module.css";

export default function Lightbox({ 
  photos, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}) {
  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowLeft") onPrev();
    else if (e.key === "ArrowRight") onNext();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  if (currentIndex === null || !photos || photos.length === 0) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* Close Button */}
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      {/* Previous Button */}
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      {/* Image */}
      <div 
        className={styles.imageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className={styles.image}
        />
        
        {/* Counter */}
        <div className={styles.counter}>
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Next Button */}
      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  );
}