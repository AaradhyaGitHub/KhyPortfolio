import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY } from "../data/gallery.js";
import classes from "./AnimatedGallery.module.css";

export default function AnimatedGallery() {
  // Configuration options
  const PRELOAD_IMAGES = 3; // Number of images to preload
  const SLIDE_DURATION = 5000; // Time each image stays visible (ms)
  const FADE_DURATION = 1000; // Transition duration (ms)

  const [allPhotos, setAllPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  // Prepare all photos for the slideshow
  useEffect(() => {
    // Create a flat array of all photos with genre info
    const allPhotosArray = GALLERY.flatMap((category) =>
      category.photos.map((photo) => ({
        url: photo,
        genre: category.genre
      }))
    );

    // Shuffle array for random display
    const shuffledPhotos = [...allPhotosArray].sort(() => Math.random() - 0.5);

    // Limit the number of photos to improve performance (adjust as needed)
    const limitedPhotos = shuffledPhotos.slice(0, 15);

    setAllPhotos(limitedPhotos);

    // Initialize imageRefs array
    imageRefs.current = limitedPhotos.map(() => new Image());
  }, []);

  // Preload images
  useEffect(() => {
    if (allPhotos.length === 0) return;

    // Calculate which images to preload
    const indicesToPreload = [];
    for (let i = 1; i <= PRELOAD_IMAGES; i++) {
      const index = (currentIndex + i) % allPhotos.length;
      indicesToPreload.push(index);
    }

    // Preload images
    indicesToPreload.forEach((index) => {
      if (imageRefs.current[index]) {
        imageRefs.current[index].src = allPhotos[index].url;
      }
    });
  }, [currentIndex, allPhotos]);

  // Auto-advance slideshow
  useEffect(() => {
    if (allPhotos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allPhotos.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [allPhotos.length]);

  // Get current image
  const getCurrentImage = () => {
    if (allPhotos.length === 0) return null;
    return allPhotos[currentIndex];
  };

  const currentPhoto = getCurrentImage();

  return (
    <div className={classes.container}>
      {allPhotos.length > 0 ? (
        <div className={classes.slideshowContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`photo-${currentIndex}`}
              className={classes.imageContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: FADE_DURATION / 1000
              }}
            >
              {currentPhoto && (
                <div className={classes.imageWrapper}>
                  <img
                    src={currentPhoto.url}
                    alt={`${currentPhoto.genre} photo`}
                    className={classes.image}
                    loading="eager"
                    ref={(el) => {
                      if (el) imageRefs.current[currentIndex] = el;
                    }}
                    onLoad={(e) => {
                      // Check image orientation and adjust container class
                      const img = e.target;
                      const wrapper = img.parentElement;
                      if (img.naturalWidth > img.naturalHeight) {
                        wrapper.classList.add(classes.landscape);
                        wrapper.classList.remove(classes.portrait);
                      } else {
                        wrapper.classList.add(classes.portrait);
                        wrapper.classList.remove(classes.landscape);
                      }
                    }}
                  />
                  <div className={classes.photoGenreTag}>
                    {currentPhoto.genre}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <p className={classes.noPhotos}>Loading gallery...</p>
      )}
    </div>
  );
}
