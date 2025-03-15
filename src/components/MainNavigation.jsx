import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
