import Header from "./components/Header";
import GradesPage from "./components/GradesPage";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <GradesPage />
      </div>
    </div>
  );
};

export default App;
