import styles from "./PreviousLink.module.css";
import PropTypes from "prop-types";
import Button from "@/shared/components/Button/Button";

const PreviousLink = ({ data }) => {
  const { originalLink, shortLink } = data;
  const handleCopy = () => {
    console.log("Copy");
  };
  return (
    <li className={styles.link__container}>
      <div className={styles["link__container--left"]}>
        <a
          className={styles["link--original"]}
          href={originalLink}
          target="_blank"
        >
          {originalLink}
        </a>
      </div>
      <div className={styles["link__container--right"]}>
        <a className={styles["link--short"]} href={shortLink} target="_blank">
          {shortLink}
        </a>
        <Button className={styles.link__copy} onClick={handleCopy}>
          Copy
        </Button>
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
