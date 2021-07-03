import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//* initial state
const initialState = {
  transactions:
    JSON.parse(localStorage.getItem("transactions")) || [],
};

//* create context
export const GlobalContext = createContext(initialState);

//* Provider component
export const GlobalProvider = ({ children }) => {
  //reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTrx(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }
  //add transaction
  function addTrx(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTrx,
        addTrx,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
