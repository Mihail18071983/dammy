import { NavLink } from "react-router-dom";
import tabs from "../../tabs.json";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.menu}>
      {tabs.map((tab) => {
        return (
          <NavLink className={styles.link} key={tab.order} to={tab.id}>
            {tab.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
