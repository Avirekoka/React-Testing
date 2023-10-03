import { CounterTwo } from "@/types/counter-two";
import React from "react";

const CounterTwo = ({
  counter,
  handleIncreament,
  handleDecreament,
}: CounterTwo) => {
  return (
    <>
      <h1>Counter Two</h1>
      <p>{counter}</p>
      {handleIncreament && (
        <button onClick={() => handleIncreament()}>Increament</button>
      )}

      {handleDecreament && (
        <button onClick={() => handleDecreament()}>Decreament</button>
      )}
    </>
  );
};

export default CounterTwo;
