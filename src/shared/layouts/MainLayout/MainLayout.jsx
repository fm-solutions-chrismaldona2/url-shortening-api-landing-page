import styles from "./MainLayout.module.css";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  const [header, body, footer] = children;
  return (
    <div className={styles.layout}>
      {header}
      {body}
      {footer}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
