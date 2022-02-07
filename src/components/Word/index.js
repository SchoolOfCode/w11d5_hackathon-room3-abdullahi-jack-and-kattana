import styles from "./Word.module.css";
import Letter from "../Letter";

function Word({ guesseResults, guesse, index }) {
    
  return (
    <div id={index} className={styles.word}>
      {guesse.map((letter, index) => {
        return <Letter letter={letter} result={guesseResults[index]} />;
      })}
    </div>
  );
}

export default Word;
