import styles from "./StatisticsSection.module.css";
import PropTypes from "prop-types";
import {
  FullyCustomizableIcon,
  BrandRecognitionIcon,
  DetailedRecordsIcon,
} from "@/shared/components/Icons/CustomIcons";
import { motion } from "motion/react";

const data = [
  {
    id: 1,
    icon: BrandRecognitionIcon,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    icon: DetailedRecordsIcon,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    icon: FullyCustomizableIcon,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const animationVariants = {
  hidden: {
    scale: 0.85,
  },
  visible: {
    scale: 1,
  },
};

const StatisticsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>Advanced Statistics</h2>
        <p className={styles.section__description}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <motion.div
        className={styles["section__items"]}
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          duration: 0.5,
          bounce: 0.6,
          stiffness: 300,
        }}
      >
        {data.map((item) => {
          return <StatisticItem data={item} key={item.id} />;
        })}
      </motion.div>
    </section>
  );
};

export default StatisticsSection;

const StatisticItem = ({ data }) => {
  const { icon: Icon, title, description } = data;
  return (
    <article className={styles.item}>
      <div className={styles["item__icon-container"]}>
        <div className={styles.item__icon}>
          <Icon />
        </div>
      </div>

      <div className={styles.item__content}>
        <h3 className={styles.item__title}>{title}</h3>
        <p className={styles.item__description}>{description}</p>
      </div>
    </article>
  );
};

StatisticItem.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.elementType,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
