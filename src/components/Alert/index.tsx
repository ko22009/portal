import styles from "./styles.module.scss";
import AlertBootstrap from "react-bootstrap/Alert";
import { Variant } from "react-bootstrap/types";

type AlertProps = {
  text: string;
  variant: Variant;
};

const Alert = ({ variant, text }: AlertProps) => {
  return (
    <AlertBootstrap className={styles.alert} variant={variant}>
      <small>{text}</small>
    </AlertBootstrap>
  );
};

export default Alert;
