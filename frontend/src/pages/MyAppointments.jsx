import "./MyAppointments.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/appointments",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res.data);

    setAppointments(res.data.appointments);

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="appointments-page">

      <h1>My Appointments</h1>

      {appointments.map((item) => (

        <div className="appointment-box" key={item._id}>

          <h3>{item.doctor?.specialization}</h3>

          <p>Date: {new Date(item.appointmentDate).toLocaleDateString()}</p>

          <p>Status: {item.status}</p>

          <p>Reason: {item.reason}</p>

        </div>

      ))}

    </div>
  );
}

export default MyAppointments;