import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { useLeaders } from "../../hooks/useLeaders";
import { ReactComponent as ModeAchievement } from "./images/achievement_1.svg";
import { ReactComponent as SuperPowerAchievement } from "./images/achievement_2.svg";

export function LeaderBoard() {
  const { leadersList } = useLeaders();

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
        <div className={styles.leaderListHeaderEl}>Достижения</div>
        <div className={styles.leaderListHeaderEl}>Время</div>
      </div>
      <div>
        {leadersList.map((leader, index) => {
          const minutes = Math.floor(leader.time / 60);
          const seconds = leader.time % 60;
          return (
            <div className={styles.leaderList} key={leader.id}>
              <div className={styles.leaderListEl}>#{index + 1}</div>
              <div className={styles.leaderListEl}>{leader.name}</div>
              <div className={styles.leaderListEl}>
                <div className={styles.achievesBox}>
                  <button className={styles.achievBtn}>
                    <p className={styles.hintAchiv}>Игра пройдена в сложном режиме</p>
                    {leader.achievements.includes(1) ? (
                      <ModeAchievement className={styles.withoutAchieve} />
                    ) : (
                      <ModeAchievement />
                    )}
                  </button>
                  <button className={styles.achievBtn}>
                    <p className={styles.hintAchiv}>Игра пройдена без супер-сил</p>
                    {leader.achievements.includes(2) ? (
                      <SuperPowerAchievement className={styles.withoutAchieve} />
                    ) : (
                      <SuperPowerAchievement />
                    )}
                  </button>
                </div>
              </div>
              <div className={styles.leaderListEl}>
                {minutes.toString().padStart("2", "0")} : {seconds.toString().padStart("2", "0")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
