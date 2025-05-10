import { Outlet, useLocation } from "react-router-dom";
import GalleryNav from "../components/galleryComponents/galleryNav";
import "./Gallery.css"; // Create this if it doesn't exist
import AnimatedGallery from "./AnimatedGallery";

export default function Gallery() {
  const location = useLocation();
  const isMainGallery = location.pathname === "/gallery";
  return (
    <div className="gallery-container">
      <GalleryNav />
      <div className="gallery-content">
        {isMainGallery ? <AnimatedGallery /> : <Outlet />}
      </div>
    </div>
  );
}
