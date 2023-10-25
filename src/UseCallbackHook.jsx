//useCallback is similar to useMemo. Main difference is that useMemo is used to memoize a value and useCallback returns a function.

import { useCallback, useState } from "react";

const UseCallbackHook = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("black");

  const getItems = useCallback(
    (inc) => {
      console.log("Get items called");
      return [number + inc, number + 1 + inc, number + 2 + inc]; // Is useMemo is used this array will be returned. Coz useCallback is used, the function itself will be returned.
    },
    [number]
  );

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      {getItems(number).map((num) => (
        <h2>{num}</h2>
      ))}
      <button onClick={() => setTheme("blue")}>Change theme</button>
      <h2>Theme is {theme}</h2>
    </div>
  );
};

export default UseCallbackHook;
