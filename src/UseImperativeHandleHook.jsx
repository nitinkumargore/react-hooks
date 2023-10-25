// This is used as an extension to ref.
// When we want to change the functionality of ref and what its pointing to then use this hook

import React, { useImperativeHandle, useRef, useState } from "react";

const CustomInput = ({}, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      alert: () => alert("imperative check"),
    }),
    []
  );
  return (
    <>
      On focus input:
      <input type="text" ref={ref} />
    </>
  );
};

const ForwardedInputRef = React.forwardRef(CustomInput);

const UseImperativeHandle = () => {
  const [name, setName] = useState("");
  const nameRef = useRef();

  return (
    <div>
      <ForwardedInputRef ref={nameRef} />
      <button onClick={() => nameRef.current.alert()}>Click</button>
    </div>
  );
};

export default UseImperativeHandle;
