import styles from "./BoostLinksSection.module.css";
import Button from "@/shared/components/Button/Button";
import { BgBoostPattern } from "@/shared/components/BackgroundPatterns/BackgroundPatterns";
const BoostLinksSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>Boost your links today</h2>
      <Button size="large">Get started</Button>
      <BgBoostPattern className={styles.section__background} />
    </section>
  );
};

export default BoostLinksSection;
