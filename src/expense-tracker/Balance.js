import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const totalAmount = transactions
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${totalAmount}</h1>
    </>
  );
};

export default Balance;
