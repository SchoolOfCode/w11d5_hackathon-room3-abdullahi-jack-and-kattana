import styles from "./Keyboard.module.css";
import Key from "../Keys";

// const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
// const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
// const buttomRow = ["Z", "X", "C", "V", "B", "N", "M"];

function KeyBoard({
  guesseResults,
  letters,
  onEnterClick,
  onLetterClick,
  onBackSpaceClick,
}) {
  const { topRow, middleRow, buttomRow } = letters;
  return (
    <div className={styles.keyboard}>
      <div className={styles.topRow}>
        {topRow.map((letter) => {
          return (
            <Key
              guesseResults={guesseResults}
              status={letter.status}
              keyClass={"topRow"}
              key={letter.letter}
              letter={letter.letter}
              handleClick={onLetterClick}
            />
          );
        })}
      </div>
      <div className={styles.middleRow}>
        {middleRow.map((letter) => {
          return (
            <Key
              guesseResults={guesseResults}
              status={letter.status}
              keyClass={"middleRow"}
              key={letter.letter}
              letter={letter.letter}
              handleClick={onLetterClick}
            />
          );
        })}
      </div>
      <div className={styles.buttomRow}>
        <Key letter={"ENTER"} keyClass={"enter"} handleClick={onEnterClick} />
        {buttomRow.map((letter) => {
          return (
            <Key
              guesseResults={guesseResults}
              keyClass={"buttomRow"}
              status={letter.status}
              key={letter.letter}
              letter={letter.letter}
              handleClick={onLetterClick}
            />
          );
        })}
        <Key
          letter={"⌫"}
          keyClass={"backSpace"}
          handleClick={onBackSpaceClick}
        />
      </div>
    </div>
  );
}

export default KeyBoard;
