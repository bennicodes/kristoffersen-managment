import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            <i>
              <svg
                className={styles.logo}
                viewBox="0 0 400 150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="pareoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                <path
                  d="M 10 90 Q 80 30, 200 90 Q 320 150, 390 90 Q 320 30, 200 90 Q 80 150, 10 90 Z"
                  fill="url(#pareoGradient)"
                />

                <text
                  x="200"
                  y="105"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  fontSize="42"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  Pareo
                </text>
              </svg>
            </i>
          </Link>
        </div>
        <nav>
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
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/tjenester"
              >
                Tjenester
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/om-oss"
              >
                Om oss
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" className={styles.contactLink}>
                Kontakt oss
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
