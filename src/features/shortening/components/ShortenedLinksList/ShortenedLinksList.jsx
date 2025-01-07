import styles from "./ShortenedLinksList.module.css";
import { useShortener } from "../../hooks/useShortener";
import ShortenLink from "../ShortenLink/ShortenLink";
import { AnimatePresence, Reorder } from "motion/react";
import { useRef } from "react";

const ShortenedLinkList = () => {
  const container = useRef(null);
  const { shortenedLinks, setShortenedLinks } = useShortener();

  const handleReorder = (newOrder) => {
    setShortenedLinks(newOrder);
  };

  return (
    <AnimatePresence>
      {shortenedLinks.length > 0 && (
        <Reorder.Group
          className={styles.list}
          axis="y"
          values={shortenedLinks}
          onReorder={handleReorder}
          ref={container}
        >
          {shortenedLinks.map((data) => {
            return (
              <ShortenLink key={data.id} data={data} container={container} />
            );
          })}
        </Reorder.Group>
      )}
    </AnimatePresence>
  );
};

export default ShortenedLinkList;
