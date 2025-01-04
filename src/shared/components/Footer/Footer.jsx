import styles from "./Footer.module.css";
import Logo from "@/shared/components/Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#">
        <Logo className={styles.footer__logo} />
      </a>
    </footer>
  );
};

export default Footer;
