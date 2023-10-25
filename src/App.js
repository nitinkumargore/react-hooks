import React from "react";
import UseStateHookExample from "./useStateHook";
import UseEffectHookExample from "./useEffectHook";
import UseContextExample from "./useContext";
import UseRefHookExample from "./useRefHook";
import UseReducerHook from "./useReducerHook";
import { Routes, Route, useNavigate } from "react-router-dom";
import ThemeProvider from "./wrappedContextProvider";
import UseMemo from "./useMemoHook";
import UseLayoutHook from "./UseLayoutHook";
import UseImperativeHandleHook from "./UseImperativeHandleHook";
import UseCallbackHook from "./UseCallbackHook";

function App() {
  const pages = [
    {label: 'useState', path:'state'},
    {label: 'useEffect', path:'effect'},
    {label: 'useContext', path:'context'},
    {label: 'useRef', path:'ref'},
    {label: 'useReducer', path:'reducer'},
    {label: 'useMemo', path:'memo'},
    {label: 'useLayout', path:'layout'},
    {label: 'useImperative', path:'imperative'},
    {label: 'useCallback', path:'callback'},
  ];
  const navogate = useNavigate();
  return (
    <div>
      <ThemeProvider>
        {/* <BrowserRouter> */}
          <div style={{display:'Flex', gap:'10px'}}>
            {pages.map((p,i)=>
               <button key={`${p.label+'_'+i}`} onClick={()=>  navogate('/'+p.path)}>{p.label}</button>
            )}
          </div>
          <hr/>
          <Routes>
            <Route path="/state" element={<UseStateHookExample />} />
            <Route path="/effect" element={<UseEffectHookExample />} />
            <Route path="/context" element={<UseContextExample />} />
            <Route path="/ref" element={<UseRefHookExample />} />
            <Route path="/reducer" element={<UseReducerHook />} />
            <Route path="/memo" element={<UseMemo />} />
            <Route path="/layout" element={<UseLayoutHook />} />
            <Route path="/imperative" element={<UseImperativeHandleHook />} />
            <Route path="/callback" element={<UseCallbackHook />} />
          </Routes>
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
