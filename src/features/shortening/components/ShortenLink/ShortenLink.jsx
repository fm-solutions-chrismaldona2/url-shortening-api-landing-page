import styles from "./ShortenLink.module.css";
import PropTypes from "prop-types";
import Link from "@/shared/components/Link/Link";
import CopyButton from "../CopyButton/CopyButton";

const ShortenLink = ({ data }) => {
  const { originalLink, shortedLink } = data;

  return (
    <li className={styles.link__container}>
      <div className={styles["link__container--left"]}>
        <Link
          href={originalLink}
          variant="primary"
          className={styles["link--original"]}
          target="_blank"
        >
          {originalLink}
        </Link>
      </div>
      <div className={styles["link__container--right"]}>
        <Link
          href={shortedLink}
          variant="primary"
          className={styles["link--short"]}
          target="_blank"
        >
          {shortedLink}
        </Link>
        <CopyButton text={shortedLink} />
      </div>
    </li>
  );
};
ShortenLink.propTypes = {
  data: PropTypes.shape({
    originalLink: PropTypes.string,
    shortedLink: PropTypes.string,
  }).isRequired,
};
export default ShortenLink;
