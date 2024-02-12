import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";

export function LeaderBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Лидерборд</h1>
        <Link to={"/"}>
          <Button>Начать игру</Button>
        </Link>
      </div>
      <div className={styles.leaderListHeader}>
        <div className={styles.leaderListHeaderEl}>Позиция</div>
        <div className={styles.leaderListHeaderEl}>Пользователь</div>
        <div className={styles.leaderListHeaderEl}></div>
        <div className={styles.leaderListHeaderEl}>Время</div>
      </div>
    </div>
  );
}
