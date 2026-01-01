import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import styles from "./MainNavigation.module.css";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* Logo */}
          <NavLink to="/" className={styles.logo}>
            KR
          </NavLink>

          {/* Desktop Navigation */}
          <ul className={styles.desktopNav}>
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className={styles.actions}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={styles.iconBtn}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${styles.iconBtn} ${styles.menuBtn}`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ============================================
          MOBILE NAVIGATION OVERLAY
          
          IMPORTANT: This is placed OUTSIDE the header
          so it can properly fill the entire viewport
          and center its content.
          ============================================ */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map(({ to, label, end }, index) => (
            <li 
              key={to}
              style={{ animationDelay: `${index * 0.05 + 0.1}s` }}
              className={styles.mobileNavItem}
            >
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}