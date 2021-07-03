import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
// expense tracker
import ExpenseTrackerHome from "./expense-tracker/Home";
import CalcHome from "./calculator/CalcHome";
import TodoHome from "./todoapp/TodoHome";

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='content'>
          <Link to='/'>
            <h2 className='title' title='Home'>
              React Simple Projects
            </h2>
          </Link>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/expense-tracker'>
              <ExpenseTrackerHome />
            </Route>
            <Route path='/calculator'>
              <CalcHome />
            </Route>
            <Route path='/todo'>
              <TodoHome />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
