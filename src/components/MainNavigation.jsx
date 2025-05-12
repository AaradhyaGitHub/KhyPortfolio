import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState, useEffect } from "react";

export default function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Optional: Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={classes.header}>
        {/* Hamburger Button - visible only on mobile */}
        <button
          className={`${classes.hamburgerButton} ${
            isMobileMenuOpen ? classes.hamburgerOpen : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen} // For accessibility
        >
          <span className={classes.hamburgerLine}></span>
          <span className={classes.hamburgerLine}></span>
          <span className={classes.hamburgerLine}></span>
        </button>

        <nav
          className={`${classes.navbar} ${
            isMobileMenuOpen ? classes.navbarOpen : ""
          }`}
        >
          {/* Close button inside the sidebar (visible on mobile when menu is open) */}
          {isMobileMenuOpen && ( // Render only when menu is open, CSS will handle display
            <button
              className={classes.closeButton}
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              &times; {/* A simple "X" character */}
            </button>
          )}
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                onClick={closeMobileMenu} // Close menu on link click
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
                onClick={closeMobileMenu} // Close menu on link click
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
                onClick={closeMobileMenu} // Close menu on link click
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
                onClick={closeMobileMenu} // Close menu on link click
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* Overlay for background dimming when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className={classes.overlay} onClick={closeMobileMenu}></div>
      )}
    </>
  );
}
