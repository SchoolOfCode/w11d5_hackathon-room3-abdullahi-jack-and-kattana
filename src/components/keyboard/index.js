import React from "react";
import Key from "../Keys";

const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const buttomRow = ["Z", "X", "C", "V", "B", "N", "M"];

function KeyBoard() {
  function onLetterClick() {}
  function onEnterClick() {}
  function onBackSpaceClick() {}

  return (
    <div>
      <div>
        {topRow.map((letter) => {
          return <Key letter={letter} handleClick={onLetterClick} />;
        })}
      </div>
      <div>
        {middleRow.map((letter) => {
          return <Key letter={letter} handleClick={onLetterClick} />;
        })}
      </div>
      <div>
        <Key letter={"ENTER"} handleClick={onEnterClick} />
        {buttomRow.map((letter) => {
          return <Key letter={letter} handleClick={onLetterClick} />;
        })}
        <Key letter={"BACKSPACE"} handleClick={onBackSpaceClick} />
      </div>
    </div>
  );
}

export default KeyBoard;
