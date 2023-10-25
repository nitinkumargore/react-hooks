import { useEffect, useState } from "react";

const UseEffectHookExample = () => {
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Called everytime
  useEffect(() => {
    console.log("Called on every render");
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("Called on mount");

    window.addEventListener("resize", handleResize);

    // The foll is called everytime this useEffect is run, to clean up first and then the useEffect is run.
    return () => {
      console.log("Unmount called");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Called on change of resource");

    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [resource]);

  return (
    <div>
      Current resource {resource}
      <h2>Window width: {windowWidth} </h2>
      <div style={{display:'flex', gap:'10px'}}>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comments")}>Comments</button>
      </div>
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </div>
  );
};

export default UseEffectHookExample;
