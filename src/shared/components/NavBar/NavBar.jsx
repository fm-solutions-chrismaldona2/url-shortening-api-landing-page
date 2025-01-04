import styles from "./NavBar.module.css";
import Logo from "@/shared/components/Logo/Logo";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.nav__logo} />
    </nav>
  );
};

export default NavBar;
