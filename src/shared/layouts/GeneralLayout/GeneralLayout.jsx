import styles from "./GeneralLayout.module.css";
import PropTypes from "prop-types";

const GeneralLayout = ({ children }) => {
  const [header, body, footer] = children;
  return (
    <div className={styles.layout}>
      {header}
      {body}
      {footer}
    </div>
  );
};

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralLayout;
