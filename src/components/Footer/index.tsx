import Container from "react-bootstrap/Container";
import styles from "./styles.module.scss";
import Link from "../Link";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <div className="d-flex my-2 gap-2 align-items-center small">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/news">News</Link>
          <div className={styles.copyright}>News portal, Copyright 2022</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
