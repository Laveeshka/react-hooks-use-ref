import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

// Every 1 second, generate a new random price
//If the old price is less than the new price, use a green font color to indicate a rise in price
//If the old price is greater than the new price, use a red font color to indicate a drop in price
function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  //create the ref and set its initial value
  const prevPriceRef = useRef(price);

  

  //we want to change the color based on the price
  //so we want a side effect with the price as the dependency
  useEffect(() => {
    //use the current value of the ref, pull it out of the object
    const prevPrice = prevPriceRef.current;
    console.log("Price is :", price);
    console.log("PrevPrice: ", prevPrice);
    if (price > prevPrice){
      setColor("green");
    }
    else if (price < prevPrice){
      setColor("red");
    }
    else {
      setColor("black");
    }

    //set the new value of the ref (note: this doesn't trigger a re-render)
    prevPriceRef.current = price;
    console.log("Prevprice after setting new value: ", prevPriceRef.current);
  }, [price]);

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
