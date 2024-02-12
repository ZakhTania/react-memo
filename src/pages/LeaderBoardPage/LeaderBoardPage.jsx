import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { getLeadersList } from "../../API";
import { useEffect, useState } from "react";

export function LeaderBoard() {
  const [leadersList, setLeadersList] = useState([]);
  useEffect(() => {
    getLeadersList()
      .then(data => {
        setLeadersList(data.leaders);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

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
        <div className={styles.leaderListHeaderEl}>Время</div>
      </div>
      <div>
        {leadersList.map(leader => {
          return (
            <div className={styles.leaderList} key={leader.id}>
              <div className={styles.leaderListEl}>{leader.id}</div>
              <div className={styles.leaderListEl}>{leader.name}</div>
              <div className={styles.leaderListEl}>{leader.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
