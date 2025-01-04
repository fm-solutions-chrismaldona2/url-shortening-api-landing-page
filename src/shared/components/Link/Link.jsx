import styles from "./Link.module.css";
import PropTypes from "prop-types";
import { concatClassNames as cn } from "@/shared/helpers/concatClassNames";

const linkVariants = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
};

const Link = ({ variant = linkVariants.default, className, children }) => {
  return (
    <a
      className={cn(`${styles.link} ${styles[`link--${variant}`]}`, className)}
    >
      {children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  variant: PropTypes.oneOf(Object.values(linkVariants)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
