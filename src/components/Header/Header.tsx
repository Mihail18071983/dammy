import containerStyles from "../../Container/Container.module.css";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={containerStyles.container}>
        <NavMenu/>
      </div>
    </header>
  );
}
