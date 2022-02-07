import { useEffect, useReducer, useState } from "react";
import styles from "./App.module.css";
import "antd/dist/antd.css";
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
  console.log(mainState.correctAnswer);

  useEffect(() => {
    if (mainState.gameStatus === "complete") {
      console.log("game is complete");
      setIsModalVisible(true);
    }
  }, [mainState.gameStatus]);

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
      dispatch({ type: ACTIONS.INCREASE_GUESSE_WORD_INDEX });
      dispatch({ type: ACTIONS.RESET_GUESSE_LETTER_INDEX });
      dispatch({ type: ACTIONS.COMPARE_GUESSE });
    }
  }
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
