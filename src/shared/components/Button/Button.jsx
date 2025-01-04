import styles from "./Button.module.css";
import PropTypes from "prop-types";

const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
};

const Button = ({
  onClick,
  children,
  type = "button",
  size = sizes.medium,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${size}`]}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      <span className={styles.button__label}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(Object.values(sizes)),
  children: PropTypes.node.isRequired,
};

export default Button;
