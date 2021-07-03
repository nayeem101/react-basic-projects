import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";
// initial state
const InitialState = {
  todoList: [
    {
      id: "123",
      text: "React todo app",
      checked: false,
      date: "2/3/2021",
      category: "Today",
    },
    {
      id: "124",
      text: "work on todo app details",
      checked: false,
      date: "3/3/2021",
      category: "Today",
    },
  ],
};

//* create context
export const TodoContextGlobal = createContext(InitialState);

//* Provider component
export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    TodoReducer,
    InitialState
  );

  //add new todo
  function addTodo(task) {
    dispatch({
      type: "addTodo",
      payload: task,
    });
  }

  //update todo checked
  function updateTodo(id) {
    dispatch({
      type: "updateTodo",
      payload: id,
    });
  }

  return (
    <TodoContextGlobal.Provider
      value={{
        todoList: state.todoList,
        addTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContextGlobal.Provider>
  );
};
