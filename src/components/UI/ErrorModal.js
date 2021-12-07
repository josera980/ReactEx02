import { Fragment } from "react";

import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClick} />
      <div className={classes.modal}>
        <div>
          <header>{props.title}</header>
        </div>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
