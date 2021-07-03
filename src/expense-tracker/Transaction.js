const Transaction = ({ trx, deleteTrx }) => {
  const sign = trx.amount < 0 ? "-" : "+";
  return (
    <li className={trx.amount < 0 ? "minus" : "plus"}>
      {trx.text}
      <span>
        {sign}${Math.abs(trx.amount)}
      </span>
      <button
        onClick={() => deleteTrx(trx.id)}
        className='delete-btn'
        title='Delete'
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
