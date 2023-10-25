// useReducer hook is very similar to useState. Its mainly used to handle state. Its used when the states are quite complex and many actions are associated with it. Similar to Redux the working is.
import { useState, useReducer } from "react";

const TYPES = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          name: action.payload.name,
          completed: false,
        },
      ];
    case TYPES.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TYPES.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [todos, dispatch] = useReducer(reducerFunc, []);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: TYPES.ADD_TODO, payload: { name: todo } });
          setTodo("");
        }}
      >
        Submit
      </button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.completed ? (
            <span>Completed{todo.name}</span>
          ) : (
            <span>{todo.name}</span>
          )}
          <button
            onClick={() =>
              dispatch({ type: TYPES.UPDATE_TODO, payload: { id: todo.id } })
            }
          >
            Toggle Complete
          </button>
          <button
            onClick={() =>
              dispatch({ type: TYPES.DELETE_TODO, payload: { id: todo.id } })
            }
          >
            Delete Todo
          </button>
        </div>
      ))}
    </div>
  );
};

export default UseReducerHook;
