const TodoList = ({ img, title, tasks, clickHandler }) => {
  return (
    <div className='todolist'>
      <img
        className='img-responsive'
        src={img}
        alt={title}
        loading='lazy'
      />
      <div
        className='todo'
        title={title}
        onClick={() => clickHandler(title, img)}
      >
        <h3>{title}</h3>
        <p>{tasks} Tasks</p>
      </div>
      <span className='option icon'>&#10247;</span>
    </div>
  );
};

export default TodoList;
