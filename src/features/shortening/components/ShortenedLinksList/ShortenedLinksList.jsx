import styles from "./ShortenedLinksList.module.css";
import { useShortener } from "../../hooks/useShortener";
import { AnimatePresence, motion } from "motion/react";
import ShortenLink from "../ShortenLink/ShortenLink";

const ShortenedLinkList = () => {
  const { shortenedLinks } = useShortener();

  return (
    <AnimatePresence>
      {shortenedLinks.length > 0 && (
        <motion.ul
          className={styles.list}
          values={shortenedLinks}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {shortenedLinks.map((data) => {
              return <ShortenLink key={data.id} data={data} />;
            })}
          </AnimatePresence>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default ShortenedLinkList;
