import "./Doctors.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/doctors");
    setDoctors(res.data.doctors);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="doctors-page">

      <h1>Our Doctors</h1>

      <div className="doctor-list">

        {doctors.map((doctor) => (

          <div className="doctor-box" key={doctor._id}>

            <h2>{doctor.specialization + " Specialist"}</h2>

            <p><b>Specialization:</b> {doctor.specialization}</p>

            <p><b>Experience:</b> {doctor.experience} Years</p>

            <p><b>Qualification:</b> {doctor.qualification}</p>

            <p><b>Fee:</b> ₹{doctor.consultationFee}</p>

            <Link to={`/appointment/${doctor._id}`}>
  <button>Book Appointment</button>
</Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Doctors;