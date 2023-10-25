import { useThemeContext } from "./wrappedContextProvider";

const UseContextExample = () => {
  const { theme, updateTheme } = useThemeContext();

  return (
    <div>
      <h2>Theme value from context is {theme}</h2>
      <button onClick={() => updateTheme("blue blue")}>Update theme</button>
    </div>
  );
};

export default UseContextExample;
