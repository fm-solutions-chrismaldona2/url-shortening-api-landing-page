import styles from "./ShortenLink.module.css";
import PropTypes from "prop-types";
import Link from "@/shared/components/Link/Link";
import CopyButton from "../CopyButton/CopyButton";
import { motion } from "motion/react";
import { DeleteIcon } from "@/shared/components/Icons/CustomIcons";
import { useShortener } from "../../hooks/useShortener";

const ShortenLink = ({ data }) => {
  const { id, longLink, shortLink } = data;
  const { deleteLink } = useShortener();

  const handleDelete = () => {
    deleteLink(id);
  };

  return (
    <motion.li
      value={data}
      className={styles.link__container}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ type: "spring", duration: 0.35 }}
    >
      <button className={styles.link__delete} onClick={handleDelete}>
        <DeleteIcon />
      </button>

      <div className={styles["link__container--left"]}>
        <Link
          href={longLink}
          variant="primary"
          className={styles["link--original"]}
          target="_blank"
        >
          {longLink}
        </Link>
      </div>
      <div className={styles["link__container--right"]}>
        <Link
          href={shortLink}
          variant="primary"
          className={styles["link--short"]}
          target="_blank"
        >
          {shortLink}
        </Link>
        <CopyButton text={shortLink} />
      </div>
    </motion.li>
  );
};
ShortenLink.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    longLink: PropTypes.string,
    shortLink: PropTypes.string,
  }).isRequired,
};
export default ShortenLink;
