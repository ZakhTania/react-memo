import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useMode } from "../../hooks/useMode";
import { useLeaders } from "../../hooks/useLeaders";

export function SelectLevelPage() {
  const { toggleMode } = useMode();
  const levelList = [1, 2, 3];
  const [levelLink, setLevelLink] = useState("3");
  function handleChangeLevel(level) {
    setLevelLink(level * 3);
  }
  const { updateLeadersList } = useLeaders();
  useEffect(() => {
    updateLeadersList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <div className={styles.levels}>
          {levelList.map(level => {
            return (
              <label htmlFor={`level${level}`} className={styles.levelLink} key={`level${level}${level}`}>
                <input
                  name="levelchoose"
                  className={styles.level}
                  type="radio"
                  id={`level${level}`}
                  defaultChecked={level * 3 === levelLink ? true : false}
                  onChange={() => handleChangeLevel(level)}
                />
                <p>{level}</p>
              </label>
            );
          })}
        </div>
        <Checkbox onClick={toggleMode}>Легкий режим (3 жизни)</Checkbox>
        <Link to={`/game/${levelLink}`}>
          <Button>Играть</Button>
        </Link>
        <Link to={`/leaderBoard`} className={styles.leaderboardLink}>
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
