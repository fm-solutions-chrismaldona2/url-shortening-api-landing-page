import styles from "./HomePageLayout.module.css";
import PropTypes from "prop-types";

const HomePageLayout = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};

HomePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageLayout;
