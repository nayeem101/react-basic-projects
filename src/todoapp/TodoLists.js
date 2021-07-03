import TodoList from "./TodoList";
// images
import sun from "./images/sun.png";
import calendar from "./images/calendar.png";
import man from "./images/man.png";
import suitcase from "./images/suitcase.png";
import shopping from "./images/shopping.png";
import others from "./images/gift.png";
import TodoDetails from "./TodoDetails";

import { useState, useContext } from "react";
import { TodoContextGlobal } from "./context/TodoContext";

const TodoLists = ({ showDetails, setShowDetails }) => {
  const { todoList } = useContext(TodoContextGlobal);

  const [currentData, setCurrentData] = useState(null);

  const todoLists = [
    {
      img: sun,
      title: "Today",
    },
    {
      img: calendar,
      title: "Planned",
    },
    {
      img: man,
      title: "Personal",
    },
    {
      img: suitcase,
      title: "Work",
    },
    {
      img: shopping,
      title: "Shopping",
    },
    {
      img: others,
      title: "Others",
    },
  ];

  // handlers
  const clickHandler = (category, img) => {
    let details = todoList.filter(
      (todo) => todo.category === category
    );
    console.log(category, details);
    setCurrentData({
      img,
      title: category,
      tasks: details,
    });
    setShowDetails(true);
  };

  return (
    <>
      {!showDetails && (
        <div className='todolist-items'>
          {todoLists.map((todo) => (
            <TodoList
              img={todo.img}
              title={todo.title}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      )}
      {showDetails && <TodoDetails data={currentData} />}
    </>
  );
};

export default TodoLists;
