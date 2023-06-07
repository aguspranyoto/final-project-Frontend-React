// TODO: answer here
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/" data-testid="home-page">
          Student Portal
        </Link>
      </div>
      <div className="nav__right">
        <Link to="/student" data-testid="student-page">
          All Student
        </Link>
        <Link to="/add" data-testid="add-page">
          Add Student
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
