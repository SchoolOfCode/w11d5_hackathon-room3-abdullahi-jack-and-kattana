import React from "react";
import Letter from "../Letter";

function Word({ guese }) {
  return (
    <div>
      {guese.map((letter) => {
        return <Letter letter={letter} />;
      })}
    </div>
  );
}

export default Word;
