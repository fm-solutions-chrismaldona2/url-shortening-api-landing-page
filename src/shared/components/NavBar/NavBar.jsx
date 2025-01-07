import styles from "./Navbar.module.css";
import Logo from "@/shared/components/Logo/Logo";
import Link from "@/shared/components/Link/Link";
import Button from "@/shared/components/Button/Button";
import { MenuIcon } from "@/shared/components/Icons/CustomIcons";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const openMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <a href="#">
        <Logo className={styles.nav__logo} />
      </a>

      <nav className={styles["nav--desktop"]} role="navigation">
        <div className={styles.nav__left}>
          <ul className={styles.nav__links}>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
          </ul>
        </div>
        <div className={styles.nav__right}>
          <Link href="#">Login</Link>
          <Button onClick={() => {}} size="medium">
            Sign Up
          </Button>
        </div>
      </nav>

      <div className={styles["nav--mobile"]}>
        <button
          className={styles["nav__burger-button"]}
          onClick={openMenu}
          aria-label="Toggle menu"
          title="Toggle menu"
        >
          <MenuIcon />
        </button>

        <AnimatePresence>{isMenuVisible && <MobileMenu />}</AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

const MobileMenu = () => {
  return (
    <motion.nav
      className={styles["nav__menu--mobile"]}
      initial={{ scale: 0.75, opacity: 0, translateY: -50 }}
      animate={{ scale: 1, opacity: 1, translateY: 0 }}
      exit={{ scale: 0.75, opacity: 0, translateY: -60 }}
      transition={{ duration: 0.35, type: "spring" }}
    >
      <div className={styles["nav__links--mobile"]}>
        <a href="#" className={styles["nav__link--mobile"]}>
          Features
        </a>
        <a href="#" className={styles["nav__link--mobile"]}>
          Pricing
        </a>
        <a href="#" className={styles["nav__link--mobile"]}>
          Resources
        </a>
      </div>
      <div className={styles["nav__login--mobile"]}>
        <a href="#" className={styles["nav__link--mobile"]}>
          Login
        </a>
        <button onClick={() => {}} className={styles["nav__signup--mobile"]}>
          Sign Up
        </button>
      </div>
    </motion.nav>
  );
};
