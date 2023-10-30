import { useThemeContext } from "./wrappedContextProvider";

const UseContextExample = () => {
  const { theme, updateTheme } = useThemeContext();

  return (
    <div>
      <h2>Theme value from context is {theme}</h2>
      <button onClick={() => updateTheme("blue")}>Update theme to blue</button>
      <button onClick={() => updateTheme("red")}>Update theme to red</button>

      <div style={{width:'200px', height:'200px', backgroundColor:theme, margin:'10px'}}>

      </div>

    </div>
  );
};

export default UseContextExample;
