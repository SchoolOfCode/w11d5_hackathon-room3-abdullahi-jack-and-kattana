import { useReducer } from "react";
import KeyBoard from "../keyboard";
import Guesses from "../Guesses";
import {
  initialMainState,
  ACTIONS,
  mainStateReducer,
} from "./mainStateReducer.js";

function App() {
  const [mainState, dispatch] = useReducer(mainStateReducer, initialMainState);

  function onLetterClick(e) {
    const letter = e.target.innerText;
    console.log(letter);
    if (mainState.guesseLetterIndex < 5) {
      dispatch({ type: ACTIONS.ADD_LETTER_TO_PLAYERGUESSES, payload: letter });
    }
    if (mainState.guesseLetterIndex < 6) {
      dispatch({ type: ACTIONS.INCREASE_GUESSE_LETTER_INDEX });
    }
  }
  function onEnterClick() {}
  function onBackSpaceClick() {
    if (mainState.guesseLetterIndex < 0) {
      dispatch({ type: ACTIONS.DECREASE_GUESSE_LETTER_INDEX });
    }
  }
  return (
    <div>
      <Guesses playerGuesses={mainState.playerGuesses} />
      <KeyBoard
        onBackSpaceClick={onBackSpaceClick}
        onEnterClick={onEnterClick}
        onLetterClick={onLetterClick}
      />
    </div>
  );
}

export default App;
