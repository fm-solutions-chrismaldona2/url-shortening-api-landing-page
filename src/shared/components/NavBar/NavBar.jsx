import styles from "./NavBar.module.css";
import Logo from "@/shared/components/Logo/Logo";
import Link from "@/shared/components/Link/Link";
import Button from "@/shared/components/Button/Button";

const NavBar = () => {
  const handleSignUp = () => {};
  return (
    <nav className={styles.nav}>
      <div className={styles["nav--left"]}>
        <a href="#">
          <Logo className={styles.nav__logo} />
        </a>
        <ul className={styles.nav__links}>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Resources</Link>
        </ul>
      </div>
      <div className={styles["nav--right"]}>
        <Link href="#">Login</Link>
        <Button onClick={handleSignUp} size="medium">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
