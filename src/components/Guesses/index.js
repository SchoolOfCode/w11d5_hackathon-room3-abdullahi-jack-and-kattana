import React from "react";
import Word from "../Word";

function Guesses({ playerGuesses }) {
  console.log(playerGuesses);
  return (
    <div>
      {playerGuesses.map((guese, index) => {
        return <Word guese={guese} index={index} />;
      })}
    </div>
  );
}

export default Guesses;
