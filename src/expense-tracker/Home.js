import "./style.css";
import Header from "./Header";
import Balance from "./Balance";
import IncomXpens from "./IncomXpens";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

const ExpenseTrackerHome = () => {
  return (
    <GlobalProvider>
      <div className='container exp-warpper'>
        <Header />
        <div className='row'>
          <Balance />
          <IncomXpens />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default ExpenseTrackerHome;
