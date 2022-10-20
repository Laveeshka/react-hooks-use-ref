import React, { useRef } from "react";

function CounterRef() {
  const count = useRef(0); //here, `count` is a ref variable which is an object with a single key `current`

  function handleClick() {
    count.current = count.current + 1; //updating the ref variable does not cause our component to re-render
    console.log(count.current);
  }

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{count.current}</button>
    </div>
  );
}

export default CounterRef;
