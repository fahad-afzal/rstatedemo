import { useState } from "react";
import "./Room.css";

function Room() {
  // const state = useState(true);
  // console.log("State =", state);

  let [isLit, setLit] = useState(false);

  //let hello = 'Hello ' + isLit + 'World';
  //let hello = `Hello  ${isLit}  World`;

  //   function updateLit() {
  //     console.log("Button Clicked");
  //     setLit(!isLit);
  //   }

  return (
    <div className={`room  + ${isLit ? "lit" : "dark"}`}>
      The room is {isLit ? "Lit" : "Dark"}
      <br />
      <br />
      <button
        onClick={() => {
          setLit(!isLit);
        }}
      >
        Toggle Light
      </button>
    </div>
  );
}

export default Room;
