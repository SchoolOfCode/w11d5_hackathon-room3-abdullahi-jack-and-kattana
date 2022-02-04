import React from "react";
import Letter from "../Letter";

function Word({ guese, index }) {
  return (
    <div id={index}>
      {guese.map((letter) => {
        return <Letter letter={letter} />;
      })}
    </div>
  );
}

export default Word;
