import styles from "./PreviousLink.module.css";
import PropTypes from "prop-types";
import Link from "@/shared/components/Link/Link";
import CopyButton from "../CopyButton/CopyButton";

const PreviousLink = ({ data }) => {
  const { originalLink, shortLink } = data;

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
          href={shortLink}
          variant="primary"
          className={styles["link--short"]}
          target="_blank"
        >
          {shortLink}
        </Link>
        <CopyButton text={shortLink} />
      </div>
    </li>
  );
};

PreviousLink.propTypes = {
  data: PropTypes.shape({
    originalLink: PropTypes.string,
    shortLink: PropTypes.string,
  }).isRequired,
};
export default PreviousLink;
