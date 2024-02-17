import styles from "./Tooltip.module.css";

export default function Tooltip({ title, text }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
