import styles from "./Keys.module.css";

function Key({ keyClass, guesseResults, letter, handleClick }) {
  let status;

  guesseResults?.forEach((row) => {
    row?.forEach((guessedLetter) => {
      if (guessedLetter.letter === letter) {
        status = guessedLetter.status;
        return status;
      }
    });
  });

  return (
    <button
      className={
        status === "correctRightPlace"
          ? `${styles.key} ${styles[keyClass]} ${styles.Green}`
          : status === "none"
          ? `${styles.key} ${styles[keyClass]}`
          : status === "correctWrongPlace"
          ? `${styles.key} ${styles.Orange} ${styles[keyClass]}`
          : status === "wrong"
          ? `${styles.key} ${styles.Grey} ${styles[keyClass]}`
          : `${styles.key} ${styles[keyClass]}  ${styles.standard}`
      }
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {letter}
    </button>
  );
}

export default Key;
