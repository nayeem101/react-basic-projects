const Button = ({ content, type, clickHandler }) => {
  return (
    <div
      onClick={() => clickHandler(content)}
      className={
        content === "0" ? "button zero" : `button ${type}`
      }
    >
      {content}
    </div>
  );
};

export default Button;
