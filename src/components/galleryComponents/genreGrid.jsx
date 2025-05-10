import { useParams } from "react-router-dom";
import { GALLERY } from "../../data/gallery";
import classes from "./genreGrid.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GenreGrid() {
  const { genre } = useParams();
  const [columns, setColumns] = useState(3);
  const currentGenre = GALLERY.find((photoGenre) => photoGenre.genre === genre);

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

  if (!currentGenre) {
    return <div className={classes.notFound}>Genre not found!</div>;
  }

  const currentPhotos = currentGenre.photos;

  // Distribute images across columns for masonry layout
  const distributePhotos = () => {
    const columnArrays = Array.from({ length: columns }, () => []);

    currentPhotos.forEach((photo, index) => {
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

  return (
    <div className={classes.container}>
      {currentPhotos.length > 0 ? (
        <div
          className={classes.masonryGrid}
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {photoColumns.map((column, colIndex) => (
            <div key={`column-${colIndex}`} className={classes.masonryColumn}>
              {column.map((photo, photoIndex) => (
                <motion.div
                  key={`photo-${colIndex}-${photoIndex}`}
                  className={classes.imageWrapper}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: photoIndex * 0.05
                  }}
                >
                  <img
                    src={photo}
                    alt={`${currentGenre.genre} photo ${colIndex}-${photoIndex}`}
                    className={classes.image}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className={classes.noPhotos}>No photos available for this genre.</p>
      )}
    </div>
  );
}
