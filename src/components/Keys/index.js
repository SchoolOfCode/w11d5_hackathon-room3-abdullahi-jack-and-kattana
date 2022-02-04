import React from "react";

function Key({ letter, handleClick }) {
  return <button onClick={handleClick}>{letter}</button>;
}

export default Key;
