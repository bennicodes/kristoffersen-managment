import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuWrapperRef = useRef(null);

  const handleMenuToggle = () => setIsMenuActive((prev) => !prev);
  const handleCloseMenu = () => setIsMenuActive(false);
  const handleLinkClick = () => setIsMenuActive(false);

  // Close when clicking outside menu & button
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuActive &&
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(e.target)
      ) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuActive]);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink} onClick={handleCloseMenu}>
            <img
              className={styles.logo}
              src="/assets/images/logo-transparent.png"
              alt="Navbar logo"
            />
            {/* LOGO */}
          </Link>
        </div>

        {/* wrapper around menu + button */}
        <div ref={menuWrapperRef} className={styles.menuWrapper}>
          <nav aria-label="Main navigation">
            <ul
              id="primary-nav"
              className={`${styles.navLinks} ${
                isMenuActive ? styles.navLinksActive : ""
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={handleLinkClick}
                >
                  Hjem
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/klienter"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={handleLinkClick}
                >
                  Klienter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/media"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={handleLinkClick}
                >
                  Media
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/presse"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={handleLinkClick}
                >
                  Presse
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/om-oss"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={handleLinkClick}
                >
                  Om oss
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontakt"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={handleLinkClick}
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* hamburger toggle */}
          <Button
            classname={styles.menuButton}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={isMenuActive}
            aria-controls="primary-nav"
          >
            <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
