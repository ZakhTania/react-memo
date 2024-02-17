import styles from "./EndGameModal.module.css";
import { addLeader } from "../../API";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLeaders } from "../../hooks/useLeaders";

export function EndGameModal({ isWon, isLeader, gameDurationSeconds, gameDurationMinutes, onClick, achievements }) {
  const { updateLeadersList } = useLeaders();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const title = isWon ? (isLeader ? "Вы попали на Лидерборд!" : "Вы победили!") : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const time = gameDurationMinutes * 60 + gameDurationSeconds;

  function addUserToLeaders() {
    addLeader({ userName, time, achievements })
      .then(() => {
        updateLeadersList();
      })
      .catch(error => {
        console.warn(error.message);
      });
  }

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeader && (
        <input
          type="text"
          className={styles.inputUserName}
          placeholder="Пользователь"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      {isLeader ? (
        <Button
          onClick={() => {
            addUserToLeaders();
            onClick();
          }}
        >
          Играть снова
        </Button>
      ) : (
        <Button onClick={onClick}>Начать сначала</Button>
      )}
      {isLeader && (
        <button
          className={styles.leaderboardLink}
          onClick={() => {
            addUserToLeaders();
            navigate("/leaderBoard");
          }}
        >
          Перейти к лидерборду
        </button>
      )}
    </div>
  );
}
