import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuActive &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuActive]);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            LOGO
          </Link>
        </div>
        <nav ref={menuRef}>
          <ul
            className={`${styles.navLinks} ${
              isMenuActive ? styles.navLinksActive : ""
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/clients"
              >
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/media"
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/press"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Press
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button classname={styles.menuButton} onClick={handleMenuToggle}>
          <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
