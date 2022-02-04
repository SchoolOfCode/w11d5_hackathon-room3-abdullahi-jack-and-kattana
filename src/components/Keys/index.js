import React from "react";

function Key({ letter, handleClick }) {
  return (
    <button
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {letter}
    </button>
  );
}

export default Key;
