import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  function handleMeasureClick() {
    const div = elementRef.current; //pulls out the div element on the DOM for access
    console.log("Measurements: ", div.getBoundingClientRect());
  }

  return (
    //attach the ref to the div with a special `ref` attribute
    <div ref={elementRef}> 
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;
