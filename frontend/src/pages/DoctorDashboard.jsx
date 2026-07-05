import "./DoctorDashboard.css";
import { Link } from "react-router-dom";

function DoctorDashboard() {
  return (
    <div className="doctor-dashboard">

      <h1>Doctor Dashboard 👨‍⚕️</h1>

      <div className="dashboard-grid">

        <Link to="/doctor-appointments" className="dashboard-card">
          <h2>📅</h2>
          <h3>Today's Appointments</h3>
          <p>View Today's Bookings</p>
        </Link>

        <Link to="/patients" className="dashboard-card">
          <h2>👨‍👩‍👧</h2>
          <h3>Total Patients</h3>
          <p>View Registered Patients</p>
        </Link>

        <Link to="/reports" className="dashboard-card">
          <h2>📄</h2>
          <h3>Medical Reports</h3>
          <p>View Uploaded Reports</p>
        </Link>

        <Link to="/doctor-profile" className="dashboard-card">
          <h2>⚙️</h2>
          <h3>Profile</h3>
          <p>Manage Profile</p>
        </Link>

      </div>

    </div>
  );
}

export default DoctorDashboard;