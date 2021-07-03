const Header = ({
  showDetails,
  setShowDetails,
  setShowAddTask,
}) => {
  const clickHandler = (e) => {
    setShowDetails(false);
    setShowAddTask(false);
  };

  return (
    <div className='header'>
      <span className={!showDetails ? "menu icon" : "hide"}>
        &#9776;
      </span>
      <span
        className={showDetails ? "back icon" : "hide"}
        onClick={clickHandler}
      >
        &#8592;
      </span>
      <span className='option icon'>&#10247;</span>
    </div>
  );
};

export default Header;
