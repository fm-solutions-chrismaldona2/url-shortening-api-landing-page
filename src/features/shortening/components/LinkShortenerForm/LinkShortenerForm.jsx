import styles from "./LinkShortenerForm.module.css";
import { BgShortenPattern } from "@/shared/components/BackgroundPatterns/BackgroundPatterns";
import ShortenButton from "../ShortenButton/ShortenButton";

const LinkShortenerForm = () => {
  return (
    <div className={styles.form__container}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.form__input}
          placeholder="Shorten a link here..."
        />
        <div>
          <ShortenButton />
        </div>
      </form>
      <BgShortenPattern className={styles.form__background} />
    </div>
  );
};

export default LinkShortenerForm;
