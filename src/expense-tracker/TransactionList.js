import { useContext } from "react";

import { GlobalContext } from "./context/GlobalState";

import Transaction from "./Transaction";

const TransacList = () => {
  const { transactions, deleteTrx } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((trx) => (
          <Transaction
            key={trx.id}
            trx={trx}
            deleteTrx={deleteTrx}
          />
        ))}
      </ul>
    </>
  );
};

export default TransacList;
