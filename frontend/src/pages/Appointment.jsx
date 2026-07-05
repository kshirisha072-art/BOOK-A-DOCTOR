import "./Appointment.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Appointment() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    doctorId: id,
    appointmentDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/appointments",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Appointment Booked Successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-card">

        <h2>Book Appointment</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={id}
            readOnly
          />

          <input
            type="date"
            name="appointmentDate"
            onChange={handleChange}
            required
          />

          <textarea
            name="reason"
            placeholder="Reason for Appointment"
            rows="4"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>
    </div>
  );
}

export default Appointment;