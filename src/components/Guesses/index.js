import React from "react";
import Word from "../Word";
import styles from "./Guesses.module.css";

function Guesses({ playerGuesses, guesseResults }) {
  console.log(guesseResults);
  console.log(playerGuesses);
  return (
    <div className={styles.board}>
      {playerGuesses.map((guesse, index) => {
        return (
          <Word
            key={index}
            guesseResults={guesseResults[index]}
            guesse={guesse}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Guesses;
