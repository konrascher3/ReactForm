import { Link } from "react-router-dom";

import classes from "./styles.module.css";

export default function MainNavigationLayout() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}