import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { useMode } from "../../hooks/useMode";

export function SelectLevelPage() {
  const { toggleMode } = useMode();
  const levelList = [1, 2, 3];
  const [levelLink, setLevelLink] = useState("3");
  function handleChangeLevel(level) {
    setLevelLink(level * 3);
  }
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        {/* <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul> */}
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
        <Checkbox onClick={toggleMode}>Использовать 3 попытки</Checkbox>
        <Link to={`/game/${levelLink}`}>
          <Button>Старт</Button>
        </Link>
      </div>
    </div>
  );
}
