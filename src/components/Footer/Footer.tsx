import containerStyles from "../../Container/Container.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={containerStyles.container}>
        <p className={styles.content}>Created by &copy;Myhailo Kap</p>
      </div>
    </footer>
  );
}
