export const ACTIONS = {
  ADD_LETTER_TO_PLAYERGUESSES: "ADD_LETTER_TO_PLAYERGUESSES",
  INCREASE_GUESSE_WORD_INDEX: "INCREASE_GUESSE_WORD_INDEX",
  INCREASE_GUESSE_LETTER_INDEX: "INCREASE_GUESSE_LETTER_INDEX",
  DECREASE_GUESSE_LETTER_INDEX: "DECREASE_GUESSE_LETTER_INDEX",
};

export const initialMainState = {
  guesseWordIndex: 0,
  guesseLetterIndex: 0,
  playerGuesses: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
};

export function mainStateReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_LETTER_TO_PLAYERGUESSES:
      return {
        ...state,
        playerGuesses: [
          ...state.playerGuesses.slice(0, state.guesseWordIndex),
          [
            ...state.playerGuesses[state.guesseWordIndex].slice(
              0,
              state.guesseLetterIndex
            ),
            action.payload,

            ...state.playerGuesses[state.guesseWordIndex].slice(
              state.guesseLetterIndex + 1
            ),
          ],
          ...state.playerGuesses.slice(state.guesseWordIndex + 1),
        ],
      };
    case ACTIONS.INCREASE_GUESSE_WORD_INDEX:
      return { ...state, guesseWordIndex: state.guesseWordIndex + 1 };
    case ACTIONS.INCREASE_GUESSE_LETTER_INDEX:
      return { ...state, guesseLetterIndex: state.guesseLetterIndex + 1 };
    case ACTIONS.DECREASE_GUESSE_LETTER_INDEX:
      return { ...state, guesseLetterIndex: state.guesseLetterIndex - 1 };
    default:
      return state;
  }
}
