import styles from "./Hero.module.css";
import { WorkingIllustration } from "@/pages/home/components/Ilustrations/Ilustrations";
import Button from "@/shared/components/Button/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.hero__title}>More than just shorter links</h1>
        <p className={styles.hero__description}>
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Button onClick={() => {}}>Get Started</Button>
      </div>
      <div className={styles["hero__illustration-container"]}>
        <WorkingIllustration className={styles.hero__illustration} />
      </div>
    </section>
  );
}
