import React from "react";

function Home({ onDecrement, onIncrement, counter }) {
  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default Home;
