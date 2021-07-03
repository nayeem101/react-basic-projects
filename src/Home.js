import { Link } from "react-router-dom";

const Home = () => {
  const projectDetails = [
    {
      route: "expense-tracker",
      title: "Expense Tracker",
      description:
        "Simple expense tracker using react hooks & context API",
    },
    {
      route: "calculator",
      title: "Calculator",
      description: "A simple calculator using react hooks",
    },
    {
      route: "todo",
      title: "Todo App",
      description:
        "Todo application with custom styles and hooks",
    },
  ];

  return (
    <div className='container'>
      {projectDetails.map((project, i) => {
        return (
          <Link to={project.route} key={i}>
            <div className='card' title='View {project.title}'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
