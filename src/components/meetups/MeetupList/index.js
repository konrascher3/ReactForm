import classes from "./styles.module.css";

export default function MeetupList({ children }) {
  return <ul className={classes.list}>{children}</ul>;
}
