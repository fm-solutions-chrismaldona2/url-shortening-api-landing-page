import styles from "./ShortenedLinksList.module.css";
import { useShortener } from "../../hooks/useShortener";
import ShortenLink from "../ShortenLink/ShortenLink";

const ShortenedLinkList = () => {
  const { shortenedLinks } = useShortener();

  return (
    shortenedLinks.length > 0 && (
      <ul className={styles.list}>
        {shortenedLinks.map((data) => {
          return <ShortenLink key={data.id} data={data} />;
        })}
      </ul>
    )
  );
};

export default ShortenedLinkList;
