import styles from "./LinkShortenerForm.module.css";
import { BgShortenPattern } from "@/shared/components/BackgroundPatterns/BackgroundPatterns";
import Button from "@/shared/components/Button/Button";

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
          <Button className={styles.form__button} type="button">
            Shorten It!
          </Button>
        </div>
      </form>
      <BgShortenPattern className={styles.form__background} />
    </div>
  );
};

export default LinkShortenerForm;
