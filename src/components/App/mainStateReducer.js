import { possibleWord } from "../../data";
const randomIndex = Math.floor(Math.random() * 2309);

export const ACTIONS = {
  ADD_LETTER_TO_PLAYERGUESSES: "ADD_LETTER_TO_PLAYERGUESSES",
  INCREASE_GUESSE_WORD_INDEX: "INCREASE_GUESSE_WORD_INDEX",
  INCREASE_GUESSE_LETTER_INDEX: "INCREASE_GUESSE_LETTER_INDEX",
  DECREASE_GUESSE_LETTER_INDEX: "DECREASE_GUESSE_LETTER_INDEX",
  RESET_GUESSE_LETTER_INDEX: "RESET_GUESSE_LETTER_INDEX",
  DELETE_GUESSE_LETTER: "DELETE_GUESSE_LETTER",
  COMPARE_GUESSE: "COMPARE_GUESSE",
  CHECK_WORD_IS_IN_WORDLIST: "CHECK_WORD_IS_IN_WORDLIST",
  RESET_IS_WORD_IN_LIST: "RESET_IS_WORD_IN_LIST",
};

export const initialMainState = {
  correctAnswer: possibleWord[randomIndex].split("").map((letter) => {
    return letter.toUpperCase();
  }),
  guesseResults: [
    [
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
    ],
    [
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
    ],
    [
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
    ],
    [
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
    ],
    [
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
    ],
    [
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
      { letter: "", color: "", status: "" },
    ],
  ],
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

  letters: {
    topRow: [
      { letter: "Q", status: "none" },
      { letter: "W", status: "none" },
      { letter: "E", status: "none" },
      { letter: "R", status: "none" },
      { letter: "T", status: "none" },
      { letter: "Y", status: "none" },
      { letter: "U", status: "none" },
      { letter: "I", status: "none" },
      { letter: "O", status: "none" },
      { letter: "P", status: "none" },
    ],
    middleRow: [
      { letter: "A", status: "none" },
      { letter: "S", status: "none" },
      { letter: "D", status: "none" },
      { letter: "F", status: "none" },
      { letter: "G", status: "none" },
      { letter: "H", status: "none" },
      { letter: "J", status: "none" },
      { letter: "K", status: "none" },
      { letter: "L", status: "none" },
    ],
    buttomRow: [
      { letter: "Z", status: "none" },
      { letter: "X", status: "none" },
      { letter: "C", status: "none" },
      { letter: "V", status: "none" },
      { letter: "B", status: "none" },
      { letter: "N", status: "none" },
      { letter: "M", status: "none" },
    ],
  },
  gameStatus: "",
  isWordInList: "",
};

export function mainStateReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_LETTER_TO_PLAYERGUESSES:
    case ACTIONS.DELETE_GUESSE_LETTER:
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
    case ACTIONS.RESET_GUESSE_LETTER_INDEX:
      return { ...state, guesseLetterIndex: 0 };
    case ACTIONS.COMPARE_GUESSE:
      const matches = state.playerGuesses[state.guesseWordIndex - 1].map(
        (letter, index) => {
          if (letter === state.correctAnswer[index]) {
            return { letter, color: "green", status: "correctRightPlace" };
          } else if (state.correctAnswer.includes(letter)) {
            return { letter, color: "orange", status: "correctWrongPlace" };
          }
          return { letter, color: "grey", status: "wrong" };
        }
      );
      const matchesTotal = matches.reduce((acc, curr) => {
        if (curr.color === "green") {
          return acc + 1;
        }
        return acc;
      }, 0);
      let gameStat = "";
      if (matchesTotal === 5 || state.guesseWordIndex === 6) {
        gameStat = "won";
      }
      if (state.guesseWordIndex === 6 && matchesTotal !== 5) {
        gameStat = "lost";
      }

      return {
        ...state,
        guesseResults: [
          ...state.guesseResults.slice(0, state.guesseWordIndex - 1),
          [...matches],
          ...state.guesseResults.slice(state.guesseWordIndex),
        ],
        gameStatus: gameStat,
      };
    case ACTIONS.CHECK_WORD_IS_IN_WORDLIST:
      if (
        possibleWord.includes(
          state.playerGuesses[state.guesseWordIndex].join("").toLowerCase()
        )
      ) {
        return { ...state, isWordInList: true };
      }
      return { ...state, isWordInList: false };

    case ACTIONS.RESET_IS_WORD_IN_LIST:
      return { ...state, isWordInList: "" };
    default:
      return state;
  }
}
