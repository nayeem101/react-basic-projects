import "./checkbox.css";

import { TodoContextGlobal } from "./context/TodoContext";
import { useContext } from "react";

const Checkbox = ({ task }) => {
  const { updateTodo } = useContext(TodoContextGlobal);

  return (
    <>
      <label className='checkbox'>
        <span className='checkbox__input'>
          <input
            type='checkbox'
            name='checkbox'
            disabled={task.checked}
            checked={task.checked}
            onChange={() => {
              updateTodo(task.id);
            }}
          />
          <span className='checkbox__control'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              aria-hidden='true'
              focusable='false'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeWidth='3'
                d='M1.73 12.91l6.37 6.37L22.79 4.59'
              />
            </svg>
          </span>
        </span>
        <span
          className={
            task.checked
              ? "radio__label checked"
              : "radio__label"
          }
        >
          {task.text}
        </span>
      </label>
      <span>{task.date}</span>
    </>
  );
};

export default Checkbox;
