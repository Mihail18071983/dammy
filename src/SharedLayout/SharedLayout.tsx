import styles from "./SharedLayout.module.css";
import containerStyles from "../Container/Container.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function SharedLayout() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.main}>
        <div className={containerStyles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
