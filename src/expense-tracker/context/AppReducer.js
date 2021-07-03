const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      let updatedTransitions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransitions)
      );
      return {
        ...state,
        transactions: updatedTransitions,
      };
    case "ADD":
      let transactions = [...state.transactions, action.payload];
      localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
      );
      return {
        ...state,
        transactions,
      };

    default:
      return state;
  }
};
export default reducer;
