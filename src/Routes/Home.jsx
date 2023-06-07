// TODO: answer here
import { useNavigate, Link } from "react-router-dom";
import img from "../assets/img/hero.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="home__left">
          <h4>Studen Independen</h4>
          <h4>Kampus Merdeka</h4>
          <h5>by Ruangguru</h5>
        </div>
        <div className="home__right">
          <h3>Student Portal</h3>
          <Link to="/student">
            <button data-testid="student-btn" className="add-btn">
              All student
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
