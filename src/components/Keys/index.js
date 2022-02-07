import styles from "./Keys.module.css";

function Key({ keyClass, guesseResults, letter, handleClick }) {
  let status;

  guesseResults?.map((row) => {
    row?.map((guessedLetter) => {
      if (guessedLetter.letter === letter) {
        console.log(guessedLetter);
        status = guessedLetter.status;
      }
    });
  });

  return (
    <button
      disabled={status === "wrong" ? true : false}
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
