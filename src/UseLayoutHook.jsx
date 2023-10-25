/* This is similar to useEffect.
useEffect runs asynchronously. It doesnt block the dom. It runs after the dom is painted.
useLayoutEffect runs synchronously. It runs in between when dom is computed by React and when its actually painted by browser.
Basically its required when we need to do sometihing based on the layout of the dom.
Coz its synchronous, performance is bad when compared to useEffect.
*/

import { useEffect, useState, useLayoutEffect } from "react";

const UseLayoutEffectHook = () => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        console.log("Count value is", count);
    }, [count]);

    return (
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    )
};

export default UseLayoutEffectHook;