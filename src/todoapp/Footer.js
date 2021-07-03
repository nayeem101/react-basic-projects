const Footer = ({ setShowAddTask, setShowDetails }) => {
  return (
    <div>
      <div className='footer'>
        <button
          className='btn btn-add'
          title='Add Task'
          onClick={() => {
            setShowAddTask(true);
            setShowDetails(true);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Footer;
