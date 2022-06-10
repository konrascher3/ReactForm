import MainNavigationLayout from "../MainNavigationLayout";
import classes from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <MainNavigationLayout />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
