import { Fragment, useState } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.includes("@") && enteredPassword.trim().length > 6) {
      props.onLogin();
      return;
    }
    setError({
      title: "An error ocurred!",
      message:
        "Please enter a valid email (including @) and password (> 7 characters).",
    });
    return console.log("Not valid!");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div>
          <header>JR Login Page</header>
        </div>
        <div>
          <label>E-mail: </label>
          <input type="text" onChange={emailChangeHandler} />
        </div>
        <div>
          <label>Password: </label>
          <input type="text" onChange={passwordChangeHandler} />
        </div>
        <footer>
          <Button type="submit">Login</Button>
        </footer>
      </form>
    </Fragment>
  );
};

export default Login;
