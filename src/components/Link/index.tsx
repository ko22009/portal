import { Link as RouterLink } from "react-router-dom";
import React from "react";
import styles from "./styles.modules.scss";

type LinkProps = {
  to: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  to,
  onClick,
}) => {
  return (
    <RouterLink onClick={onClick} className={styles.link} to={to}>
      {children}
    </RouterLink>
  );
};

export default Link;
