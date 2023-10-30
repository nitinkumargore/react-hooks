// useCallback is similar to useMemo. 
// Main difference is that useMemo is used to memoize a value and useCallback returns a function.

import { useCallback, useState } from "react";

const UseCallbackHook = () => {
  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [theme, setTheme] = useState("black");

  const getItems = useCallback(
    (inc) => {
      console.log("Get items called");
      return [number + inc, number + 1 + inc, number + 2 + inc]; // If useMemo is used this array will be returned. Coz useCallback is used, the function itself will be returned.
    },
    [number]
  );

  return (
    <div>
      <div>
        <label htmlFor='number'>Number:-  </label>
        <input id='number' type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
      </div>
      <div style={{margin:'10px 0'}}>
        <label htmlFor='increment'>Increment:-  </label>
        <input id='increment' type="number" value={increment} onChange={(e) => setIncrement(Number(e.target.value))}/>
      </div>

      {getItems(increment).map((num,i) => (
        <h2 key={'key_'+i}>{num}</h2>
      ))}

      <button onClick={() => setTheme("white")}>Change theme</button>
      <h2>Theme is {theme}</h2>
    </div>
  );
};

export default UseCallbackHook;
