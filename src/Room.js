import { useState } from "react";

function Room() {
  // const state = useState(true);
  // console.log("State =", state);

  let [isLit, setLit] = useState(false);

  //   function updateLit() {
  //     console.log("Button Clicked");
  //     setLit(!isLit);
  //   }

  return (
    <div>
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
