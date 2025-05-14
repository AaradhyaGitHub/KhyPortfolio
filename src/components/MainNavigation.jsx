import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <ul className={`${classes.navlist} ${isOpen ? classes.open : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
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
        <button className={classes.toggle} onClick={toggleMenu}>
          <span
            className={`${classes.arrow} ${isOpen ? classes.up : classes.down}`}
          ></span>
        </button>
      </nav>
    </header>
  );
}
