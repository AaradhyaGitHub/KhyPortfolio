import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GALLERY } from "../data/gallery.js";
import classes from "./AnimatedGallery.module.css";

export default function AnimatedGallery() {
  const [columns, setColumns] = useState(4);
  const [allPhotos, setAllPhotos] = useState([]);

  // Prepare all photos for main gallery view
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
    setAllPhotos(shuffledPhotos);
  }, []);

  // Responsive column adjustment based on screen width
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth > 1200) {
        setColumns(4);
      } else if (window.innerWidth > 900) {
        setColumns(3);
      } else if (window.innerWidth > 600) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Distribute images across columns for masonry layout
  const distributePhotos = () => {
    const columnArrays = Array.from({ length: columns }, () => []);

    allPhotos.forEach((photo) => {
      // Add photo to the column with the least content
      const shortestColIndex = columnArrays
        .map((column, i) => ({
          height: column.reduce((acc) => acc + 1, 0),
          index: i
        }))
        .sort((a, b) => a.height - b.height)[0].index;

      columnArrays[shortestColIndex].push(photo);
    });

    return columnArrays;
  };

  const photoColumns = distributePhotos();

  // For the main gallery animation, we double the elements to create a seamless loop
  const createLoopedColumns = (columns) => {
    return columns.map((column) => [...column, ...column]);
  };

  const loopedColumns = createLoopedColumns(photoColumns);

  return (
    <div className={classes.container}>
      {allPhotos.length > 0 ? (
        <div
          className={classes.masonryGrid}
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {loopedColumns.map((column, colIndex) => (
            <div key={`column-${colIndex}`} className={classes.masonryColumn}>
              {column.map((photo, photoIndex) => (
                <motion.div
                  key={`photo-${colIndex}-${photoIndex}`}
                  className={classes.imageWrapper}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (photoIndex % (column.length / 2)) * 0.05
                  }}
                >
                  <img
                    src={photo.url}
                    alt={`${photo.genre} photo`}
                    className={classes.image}
                    loading="lazy"
                  />
                  <div className={classes.photoGenreTag}>{photo.genre}</div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className={classes.noPhotos}>Loading gallery...</p>
      )}
    </div>
  );
}
