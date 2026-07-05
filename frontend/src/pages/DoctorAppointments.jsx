import { useEffect, useState } from "react";
import axios from "axios";

function DoctorAppointments() {
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

      setAppointments(res.data.appointments);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Today's Appointments</h1>

      {appointments.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#fff",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Patient: {item.patient?.name}</h3>
          <p>Doctor: {item.doctor?.specialization}</p>
          <p>Date: {new Date(item.appointmentDate).toLocaleDateString()}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorAppointments;