// TODO: answer here
import { useState } from "react";

import Navbar from "../components/Navbar";

const AddStudent = (props) => {
  const { setStudents } = props;

  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullname,
      birthDate,
      gender,
      faculty: getFacultyByProgramStudy(programStudy),
      programStudy,
    };

    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents((prevStudents) => [...prevStudents, data]);
        setFullname("");
        setBirthDate("");
        setGender("");
        setProgramStudy("");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const getFacultyByProgramStudy = (programStudy) => {
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "";
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-card">
        <form
          id="form-student"
          className="form-student"
          onSubmit={handleSubmit}
        >
          <div className="fullname">
            <label htmlFor="fullname">
              Fullname
              <input
                id="input-name"
                type="text"
                data-testid="name"
                value={fullname}
                placeholder="John Doe"
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="profile-picture">
            <label htmlFor="profile-picture">
              Profile Picture
              <input
                id="input-profile-picture"
                type="text"
                data-testid="profilePicture"
                placeholder="https://placehold.com/image.jpg"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="address">
            <label htmlFor="address">
              Address
              <input
                id="input-address"
                type="text"
                data-testid="address"
                placeholder="City, Country"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="phone-number">
            <label htmlFor="phone-number">
              Phone Number
              <input
                id="phone-number"
                type="number"
                data-testid="phoneNumber"
                placeholder="+628XXXXXXXX"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="birth">
            <label htmlFor="input-date">
              Birth Date
              <input
                id="input-date"
                type="date"
                data-testid="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="gender">
            <label htmlFor="input-gender">Gender</label>
            <select
              id="input-gender"
              data-testid="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Choose your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="prody">
            <label htmlFor="input-prody">
              Program Study
              <select
                id="input-prody"
                data-testid="prody"
                value={programStudy}
                onChange={(e) => setProgramStudy(e.target.value)}
                required
              >
                <option value="">Choose your Program Study</option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">
                  Hubungan Internasional
                </option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </select>
            </label>
          </div>

          <div>
            <button
              className="add-btn"
              id="add-btn"
              type="submit"
              data-testid="add-btn"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
