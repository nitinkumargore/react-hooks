import { useState, useMemo } from "react";

/*
1. useMemo is used when a heavy computation need not be made everytime. Its to be done only when a set of dependencies change.
2. useMemo is also used when referential value is to be compared. Like run useEffect only when a value changes. So although written in func comp, wrap it in useMemo so that it wont change each time.
 */
const slowComputationFunc = () => {
  console.log('useMemo - Inside slowComputationFunc()');
  for (let i = 0; i < 1000000000; i++) {}
  return 'Completed slowComputationFunc()';
};

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  // const countComputationVal = useMemo(() => slowComputationFunc(), []);
  const countComputationVal = slowComputationFunc();

  return (
    <div>
      <h1>Count val is: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <div>
        {countComputationVal}
      </div>
    </div>
  );
};

export default UseMemoHook;
