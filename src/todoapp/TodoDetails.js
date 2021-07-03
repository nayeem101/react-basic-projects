import Checkbox from "./Checkbox";

const TodoDetails = ({ data }) => {
  return (
    <div className='todo-wrapper'>
      {data ? (
        <div className='todo-details'>
          <div className='todo-top'>
            <img
              className='img-responsive'
              src={data.img}
              alt={data.title}
            />
            <div className='info'>
              <p>{data.tasks.length} Tasks</p>
              <h2>{data.title}</h2>
            </div>
          </div>
          <div className='todo-body'>
            {data.tasks.map((task) => (
              <Checkbox task={task} key={task.id} />
            ))}
          </div>
        </div>
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
};

export default TodoDetails;
