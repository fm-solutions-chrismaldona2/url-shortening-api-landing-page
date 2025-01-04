import styles from "./Link.module.css";
import PropTypes from "prop-types";
import { concatClassNames as cn } from "@/shared/helpers/concatClassNames";

const linkVariants = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
};

const Link = ({
  href,
  variant = linkVariants.default,
  target,
  className,
  children,
}) => {
  return (
    <a
      className={cn(`${styles.link} ${styles[`link--${variant}`]}`, className)}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(linkVariants)),
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
