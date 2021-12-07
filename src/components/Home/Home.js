import Button from "../UI/Button";
import classes from "./Home.module.css";

const Home = (props) => {
  const logoutClickHandler = () => {
    props.onLogout();
  };

  return (
    <div className={classes.home}>
      <header>
        <h2>Main Page</h2>
        <Button>Teams</Button>
        <Button>Players</Button>
        <Button>Tournaments</Button>
        <Button>Stats</Button>
        <Button onClick={logoutClickHandler}>Logout</Button>
      </header>
      <div>
        <h2>Yes sir!!!</h2>
      </div>
    </div>
  );
};

export default Home;
