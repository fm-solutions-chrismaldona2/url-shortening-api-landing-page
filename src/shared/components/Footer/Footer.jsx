import styles from "./Footer.module.css";
import Logo from "@/shared/components/Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.footer__logo} />
    </footer>
  );
};

export default Footer;
