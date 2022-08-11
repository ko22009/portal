import Layout from "../../components/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./styles.module.scss";
import Alert from "../../components/Alert";
import { FormEventHandler, useEffect } from "react";
import { useState } from "react";
import { authAction } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticated, getError } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const authenticated = useSelector(getAuthenticated);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(authAction({ username: login, password }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/profile");
  }, [authenticated]);

  return (
    <Layout centered>
      <Form className={styles.form} onSubmit={onSubmit}>
        <Form.Text>
          <h3>Login form</h3>
        </Form.Text>
        {error && (
          <Alert text="Username or password is incorrect." variant="danger" />
        )}
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Enter login"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Layout>
  );
};

export default Login;
