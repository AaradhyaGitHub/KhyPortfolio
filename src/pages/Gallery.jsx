import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GALLERY } from "../data/gallery";
import Lightbox from "../components/Lightbox";
import styles from "./Gallery.module.css";

const genres = [
  { id: "landscape", label: "Landscape" },
  { id: "art", label: "Art" },
  { id: "portrait", label: "Portraits" },
  { id: "street", label: "Street" },
  { id: "fashion", label: "Fashion" },
  { id: "graduation", label: "Graduation" }
];

// Fisher-Yates shuffle
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Gallery() {
  const { genre } = useParams();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [columns, setColumns] = useState(2);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Default to first genre if none selected
  const currentGenre = genre || genres[0].id;
  const currentLabel = genres.find(g => g.id === currentGenre)?.label || "Gallery";

  // Handle responsive columns
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1400) setColumns(4);
      else if (width >= 1024) setColumns(3);
      else if (width >= 640) setColumns(2);
      else setColumns(2);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Load photos when genre changes
  useEffect(() => {
    const loadPhotos = async () => {
      setIsLoading(true);
      
      const foundGenre = GALLERY.find(g => g.genre === currentGenre);
      if (foundGenre) {
        const shuffled = shuffleArray(foundGenre.photos);
        setPhotos(shuffled);
      } else {
        setPhotos([]);
      }
      
      // Small delay for smooth transition
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsLoading(false);
    };

    loadPhotos();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentGenre]);

  // Close nav when clicking outside or selecting genre
  const handleGenreSelect = (genreId) => {
    setIsNavOpen(false);
    navigate(`/gallery/${genreId}`);
  };

  // Distribute photos into columns for masonry
  const distributePhotos = () => {
    const columnArrays = Array.from({ length: columns }, () => []);
    photos.forEach((photo, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push({ url: photo, index });
    });
    return columnArrays;
  };

  const photoColumns = distributePhotos();

  // Lightbox handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextPhoto = () => setLightboxIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className={styles.gallery}>
      {/* Genre Selector Button */}
      <div className={styles.selectorWrapper}>
        <button 
          className={styles.selectorButton}
          onClick={() => setIsNavOpen(true)}
          aria-expanded={isNavOpen}
        >
          <span className={styles.selectorLabel}>{currentLabel}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Slide-out Genre Panel */}
      <div 
        className={`${styles.navOverlay} ${isNavOpen ? styles.open : ""}`}
        onClick={() => setIsNavOpen(false)}
      />
      
      <nav className={`${styles.genreNav} ${isNavOpen ? styles.open : ""}`}>
        <div className={styles.navHeader}>
          <span className={styles.navTitle}>Categories</span>
          <button 
            className={styles.closeBtn}
            onClick={() => setIsNavOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <ul className={styles.genreList}>
          {genres.map((g, index) => (
            <li 
              key={g.id}
              style={{ animationDelay: `${index * 0.05}s` }}
              className={styles.genreItem}
            >
              <button
                className={`${styles.genreButton} ${currentGenre === g.id ? styles.active : ""}`}
                onClick={() => handleGenreSelect(g.id)}
              >
                {g.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Gallery Grid */}
      <div className={styles.gridContainer}>
        {isLoading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>Loading {currentLabel}...</p>
          </div>
        ) : photos.length > 0 ? (
          <div 
            className={styles.masonryGrid}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {photoColumns.map((column, colIndex) => (
              <div key={`col-${colIndex}`} className={styles.masonryColumn}>
                {column.map((photo) => (
                  <div
                    key={`photo-${photo.index}`}
                    className={styles.photoWrapper}
                    onClick={() => openLightbox(photo.index)}
                  >
                    <img
                      src={photo.url}
                      alt={`${currentLabel} ${photo.index + 1}`}
                      className={styles.photo}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noPhotos}>
            <p>Coming soon...</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      )}
    </div>
  );
}