// Ref will maintain or persist information across re-renders and it doesnt cause the compoent to rerender
// On any state update the component will re-render. Thats why state cannot be used to keep track of number of re-renders.
import { useRef, useEffect, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const prevName = useRef(name);
  const inputRef = useRef();

  // Called each time the component re-renders
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const focus = () => {
      inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focus}>Add focus</button>
      <div>Name value is {name}</div>
      <div>Previous name is {prevName.current}</div>
      <div>Re-render count is {renderCount.current}</div>
    </div>
  );
};

export default UseRefHook;
