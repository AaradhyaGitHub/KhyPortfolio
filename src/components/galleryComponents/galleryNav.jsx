import { NavLink } from "react-router-dom";
import classes from "./galleryNav.module.css";

export default function GalleryNav() {
  return (
    <nav className={classes.galleryNav}>
      <ul>
        <li>
          <NavLink
            to="/gallery/landscape"
            className={({ isActive }) =>
              isActive ? `${classes.genre} ${classes.active}` : classes.genre
            }
          >
            LANDSCAPE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery/art"
            className={({ isActive }) =>
              isActive ? `${classes.genre} ${classes.active}` : classes.genre
            }
          >
            ART
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery/portrait"
            className={({ isActive }) =>
              isActive ? `${classes.genre} ${classes.active}` : classes.genre
            }
          >
            PORTRAITS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery/fashion"
            className={({ isActive }) =>
              isActive ? `${classes.genre} ${classes.active}` : classes.genre
            }
          >
            FASHION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery/graduation"
            className={({ isActive }) =>
              isActive ? `${classes.genre} ${classes.active}` : classes.genre
            }
          >
            GRADUATION
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
