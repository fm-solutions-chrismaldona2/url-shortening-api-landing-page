import styles from "./LinkShortenerForm.module.css";
import { BgShortenPattern } from "@/shared/components/BackgroundPatterns/BackgroundPatterns";
import ShortenButton from "../ShortenButton/ShortenButton";
import { useForm } from "react-hook-form";
import { validateUrl } from "@/shared/helpers/validateURL";
import { useShortener } from "../../hooks/useShortener";

import { motion, AnimatePresence } from "motion/react";

const errorAnimationVariants = {
  hidden: { opacity: 0, translateY: -10 },
  visible: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: -5 },
};

const errorAnimationTransition = {
  opacity: { duration: 0.35 },
  translateY: { duration: 0.5 },
};

const LinkShortenerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const { shortenLink } = useShortener();

  const onSubmit = ({ link }) => {
    shortenLink(link);
  };

  return (
    <motion.div className={styles.form__container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["form__input-container"]}>
          <input
            type="text"
            className={`${styles.form__input} ${
              errors.link && styles["form__input--error"]
            }`}
            placeholder="Shorten a link here..."
            {...register("link", {
              required: "Please add a link",
              validate: {
                validUrl: (value) =>
                  validateUrl(value) || "Please enter a valid URL",
              },
            })}
            aria-invalid={errors.link ? "true" : "false"}
          />
          <AnimatePresence mode="popLayout">
            {errors.link && (
              <motion.span
                className={styles.form__error}
                variants={errorAnimationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={errorAnimationTransition}
              >
                {errors.link.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div>
          <ShortenButton type="submit" />
        </div>
      </form>
      <BgShortenPattern className={styles.form__background} />
    </motion.div>
  );
};

export default LinkShortenerForm;
