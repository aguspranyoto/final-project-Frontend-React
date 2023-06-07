// TODO: answer here

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1> 404|Not Found</h1>
      <Link to="/">
        <button className="add-btn">Take Me Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
