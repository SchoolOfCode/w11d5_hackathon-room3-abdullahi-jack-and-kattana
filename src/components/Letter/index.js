import styles from "./Letter.module.css";

function Letter({ letter, result }) {
  return (
    <div
      className={
        result.color === "green"
          ? `${styles.letter} ${styles.Green}`
          : result.color === "orange"
          ? `${styles.letter} ${styles.Orange}`
          : result.color === "grey"
          ? `${styles.letter} ${styles.Grey}`
          : `${styles.letter} ${styles.Black}`
      }
    >
      {letter}
    </div>
  );
}

export default Letter;
