import { useEffect, useReducer, useState } from "react";
import styles from "./App.module.css";
import "antd/dist/antd.min.css";
import { Modal } from "antd";
import KeyBoard from "../keyboard";
import Guesses from "../Guesses";
import Header from "../Header";
import {
  initialMainState,
  ACTIONS,
  mainStateReducer,
} from "./mainStateReducer.js";

function App() {
  const [mainState, dispatch] = useReducer(mainStateReducer, initialMainState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (mainState.gameStatus === "won" || mainState.gameStatus === "lost") {
      setIsModalVisible(true);
    }
  }, [mainState.gameStatus]);
  console.log(mainState);
  function onLetterClick(e) {
    const letter = e.target.innerText;

    if (mainState.guesseLetterIndex < 5) {
      dispatch({ type: ACTIONS.ADD_LETTER_TO_PLAYERGUESSES, payload: letter });
    }
    if (mainState.guesseLetterIndex < 5) {
      dispatch({ type: ACTIONS.INCREASE_GUESSE_LETTER_INDEX });
    }
  }
  function onEnterClick(e) {
    if (mainState.guesseLetterIndex === 5) {
      dispatch({ type: ACTIONS.CHECK_WORD_IS_IN_WORDLIST });
      // if (!mainState.isWordInList) {
      //   console.log(mainState.isWordInList);
      //   alert("That word is not in our word list");
      //   return;
      // }
    }
  }
  useEffect(() => {
    console.log("here1", mainState.guesseLetterIndex);
    if (mainState.guesseLetterIndex === 5) {
      console.log("here2");
      if (mainState.isWordInList) {
        dispatch({ type: ACTIONS.INCREASE_GUESSE_WORD_INDEX });
        dispatch({ type: ACTIONS.RESET_GUESSE_LETTER_INDEX });
        dispatch({ type: ACTIONS.COMPARE_GUESSE });
        dispatch({ type: ACTIONS.RESET_IS_WORD_IN_LIST });
      } else {
        console.log(mainState.isWordInList);
        alert("That word is not in our word list");
        dispatch({ type: ACTIONS.RESET_IS_WORD_IN_LIST });
      }
    }
  }, [mainState.isWordInList]);
  function onBackSpaceClick() {
    if (mainState.guesseLetterIndex > 0) {
      dispatch({ type: ACTIONS.DECREASE_GUESSE_LETTER_INDEX });
      dispatch({ type: ACTIONS.DELETE_GUESSE_LETTER, payload: "" });
    }
  }

  const handleOk = () => {
    setIsModalVisible(false);
    document.location.reload();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={styles.app}>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {mainState.gameStatus === "won" && <p>Congrats</p>}
        {mainState.gameStatus === "lost" && (
          <p>
            oh no! the word you were looking for was {mainState.correctAnswer}
            <br />
            better luck next game
          </p>
        )}
        <p>click ok to play a new game</p>
      </Modal>
      <Header />
      <Guesses
        playerGuesses={mainState.playerGuesses}
        guesseResults={mainState.guesseResults}
      />
      <KeyBoard
        guesseResults={mainState.guesseResults}
        onBackSpaceClick={onBackSpaceClick}
        onEnterClick={onEnterClick}
        onLetterClick={onLetterClick}
        letters={mainState.letters}
      />
    </div>
  );
}

export default App;
