import React, { useState } from "react";

export const App1 = () => {
  //   const i = 1; //js object
  const [add, setAdd] = useState(1); //add=1;
  function increment() {
    setAdd(add + 1);
  }
  function decrement() {
    setAdd(add - 1);
  }

  return (
    <div>
      <div>
        <div>{add}</div>
        <button onClick={() => increment()}>add</button>
        <button onClick={() => decrement()}>sub</button>
      </div>
    </div>
  );
};
