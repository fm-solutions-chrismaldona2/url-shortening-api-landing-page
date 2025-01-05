import styles from "./Footer.module.css";
import Logo from "@/shared/components/Logo/Logo";
import Link from "@/shared/components/Link/Link";
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from "@/shared/components/Icons/SocialIcons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <a href="#">
          <Logo className={styles.footer__logo} />
        </a>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__categories}>
          <div className={styles.category}>
            <h4 className={styles.category__title}>Features</h4>
            <ul className={styles.category__links}>
              <li>
                <Link href="#" variant="secondary">
                  Link Shortening
                </Link>
              </li>
              <li>
                <Link href="#" variant="secondary">
                  Branded Links
                </Link>
              </li>
              <li>
                <Link href="#" variant="secondary">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4 className={styles.category__title}>Resources</h4>
            <ul className={styles.category__links}>
              <li>
                <Link href="#" variant="secondary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" variant="secondary">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="#" variant="secondary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4 className={styles.category__title}>Company</h4>
            <ul className={styles.category__links}>
              <li>
                <Link href="#" variant="secondary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" variant="secondary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" variant="secondary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" variant="secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className={styles.footer__social}>
          <li>
            <a href="#" className={styles.footer__link}>
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer__link}>
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer__link}>
              <PinterestIcon />
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer__link}>
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
