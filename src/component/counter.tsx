import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [amount, setAmount] = useState(0);
  return (
      <>
          <h1>counter <span>{counter}</span></h1>
          <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>

          <h2>{amount}</h2>
          <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          <button onClick={() => setCounter(amount)}>Amount</button>
      </>
  )
}

export default Counter