import styles from "./Checkbox.module.css";

export function Checkbox({ children, onClick }) {
  return (
    <div className={styles.div}>
      <input onClick={onClick} className={styles.input} type="checkbox" id="set-attempts" />
      <label htmlFor="set-attempts" className={styles.label}>
        {children}
      </label>
    </div>
  );
}
