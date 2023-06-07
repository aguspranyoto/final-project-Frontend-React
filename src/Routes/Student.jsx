import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetch("http://localhost:3001/student");
        const data = await res.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getStudents();
  }, [students]);

  if (loading) {
    return "Loading ...";
  }

  if (error) {
    return "Error!";
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    }).then(() => {
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="header">
        <div className="header__left">
          <Link data-testid="home-page">
            <h2> All Student</h2>
          </Link>
        </div>
        <div className="header__right">
          <input type="text" placeholder="All" />
        </div>
      </div>
      <div className="container-card">
        <div className="table-container">
          <table id="table-student">
            <thead>
              <tr>
                <th>Fullname</th>
                <th>Birth Date</th>
                <th>Gender</th>
                <th>Faculty</th>
                <th>Program Study</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={`${student.id}`} className="student-data-row">
                  <td>
                    <Link to={`${student.id}`} style={{ cursor: "pointer" }}>
                      {student.fullname}
                    </Link>
                  </td>
                  <td>{student.birthDate}</td>
                  <td>{student.gender}</td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(student.id)}
                      data-testid={`delete-${student.id}`}
                      id="del-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Student;
