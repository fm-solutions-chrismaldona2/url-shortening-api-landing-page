import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { concatClassNames as cn } from "@/shared/helpers/concatClassNames";

const Button = ({ onClick, className, children, ...props }) => {
  return (
    <button
      className={cn(styles.button, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
