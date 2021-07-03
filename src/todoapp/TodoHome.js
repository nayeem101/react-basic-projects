// styles & components
import "./todostyles.css";
import Header from "./Header";
import Profile from "./Profile";
import TodoLists from "./TodoLists";
import AddTask from "./AddTask";
import Footer from "./Footer";

import { TodoContextProvider } from "./context/TodoContext";
import { useState } from "react";

const TodoHome = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <TodoContextProvider>
      <div className='container'>
        <h2 className='project-title'>ToDO App</h2>
        <div className='App'>
          <div className='wrapper'>
            <Header
              showDetails={showDetails}
              setShowDetails={setShowDetails}
              setShowAddTask={setShowAddTask}
            />
            {!showDetails && <Profile />}
            {!showAddTask && (
              <TodoLists
                setShowDetails={setShowDetails}
                showDetails={showDetails}
              />
            )}
            {showAddTask && (
              <AddTask
                setShowDetails={setShowDetails}
                setShowAddTask={setShowAddTask}
              />
            )}
            <Footer
              setShowAddTask={setShowAddTask}
              setShowDetails={setShowDetails}
            />
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default TodoHome;
