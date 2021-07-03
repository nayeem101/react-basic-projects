import { useState, useContext } from "react";
import { TodoContextGlobal } from "./context/TodoContext";

const AddTask = ({ setShowAddTask, setShowDetails }) => {
  const { addTodo } = useContext(TodoContextGlobal);

  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  //add task function
  function addTask() {
    let newTask = {
      id: Date.now().toString(),
      text,
      date,
      category,
      checked: false,
    };
    addTodo(newTask);
    setShowAddTask(false);
    setShowDetails(false);
  }

  return (
    <div className='add-task-wrapper'>
      <h3>Add Task</h3>
      <div className='task-from'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
        >
          <div className='inp-group'>
            <label htmlFor='text'>Enter task</label>
            <input
              type='text'
              id='text'
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className='inp-group'>
            <label htmlFor='category'>Task Category</label>
            <select
              id='category'
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value='' disabled>
                Select Category
              </option>
              <option value='Planned'>Planned</option>
              <option value='Personal'>Personal</option>
              <option value='Work'>Work</option>
              <option value='Shopping'>Shopping</option>
              <option value='Others'>Others</option>
            </select>
          </div>
          <div className='inp-group'>
            <label htmlFor='date'>Task Date</label>
            <input
              type='Date'
              id='date'
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
