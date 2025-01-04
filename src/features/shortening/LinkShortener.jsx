import styles from "./LinkShortener.module.css";
import LinkShortenerForm from "./components/LinkShortenerForm/LinkShortenerForm";
import PreviousLink from "./components/PreviousLink/PreviousLink";

const PreviousLinks = [
  {
    id: 1,
    originalLink: "https://www.google.com",
    shortLink: "https://shrtco.de/abc123",
  },
];

const LinkShortener = () => {
  return (
    <>
      <div className={styles.shotener__container}>
        <LinkShortenerForm />
      </div>
      <ul className={styles["shotened-links__container"]}>
        {PreviousLinks.map((data) => {
          return <PreviousLink key={data.id} data={data} />;
        })}
      </ul>
    </>
  );
};

export default LinkShortener;
