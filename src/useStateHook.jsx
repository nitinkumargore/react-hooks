import { useState } from "react";

const useStateHookExample = () => {
  const [count, setCount] = useState(() => {
    console.log("This function is run only once");

    // Its run only on first render. Post that React maintains the state of the count internally from useState hook and re-renders.
    return 10;
  });

  const incrementCount = () => {
    // Passing callback to the useState hook to get the exact value of the state. Coz useState is async by default. So to get the current state using callback.
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <h2>Increment count++: <button onClick={incrementCount}>Increment</button></h2>
      <h2>Decrement count--: <button onClick={decrementCount}>Increment</button></h2>
    </div>
  );
};

export default useStateHookExample;
