import styles from "./StatisticSection.module.css";
import {
  FullyCustomizableIcon,
  BrandRecognitionIcon,
  DetailedRecordsIcon,
} from "@/shared/components/Icons/CustomIcons";

const data = [
  {
    icon: BrandRecognitionIcon,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: DetailedRecordsIcon,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: FullyCustomizableIcon,

    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const StatisticSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>Advanced Statistics</h2>
        <p className={styles.section__description}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
    </section>
  );
};

export default StatisticSection;
