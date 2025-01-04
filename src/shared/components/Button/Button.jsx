import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { concatClassNames as cn } from "@/shared/helpers/concatClassNames";

const Button = ({
  onClick,
  className,
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className)}
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
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
