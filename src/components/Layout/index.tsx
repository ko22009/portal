import Menu from "../Menu";
import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../Footer";
import styles from "./styles.module.scss";
import cn from "classnames";

type LayoutProps = {
  centered?: boolean;
};

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  centered,
}) => {
  return (
    <div className={styles.container}>
      <Menu />
      <Container
        className={cn("flex-grow-1 d-flex flex-column", {
          "justify-content-center": centered,
        })}
      >
        <div className={styles.content}>{children}</div>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
