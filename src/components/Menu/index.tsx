import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "../Link";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthenticated,
  setAuthenticated,
} from "../../store/slices/authSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(getAuthenticated);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-2 d-flex">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Nav>
          <Nav className="gap-2 d-flex">
            <Link to="/profile">Profile</Link>
            {(!authenticated && <Link to="/login">Login</Link>) || (
              <Link to="#" onClick={() => dispatch(setAuthenticated(false))}>
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
