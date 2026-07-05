import "./PatientDashboard.css";
import { Link } from "react-router-dom";

function PatientDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">

      <h1>Welcome, {user?.name} 👋</h1>

      <div className="dashboard-cards">

        <Link to="/doctors" className="card">
          👨‍⚕️
          <h3>Find Doctors</h3>
        </Link>

        <Link to="/my-appointments" className="card">
          📋
          <h3>My Appointments</h3>
        </Link>

        <Link to="/reports" className="card">
  📄
  <h3>Medical Reports</h3>
</Link>

        <div className="card" onClick={handleLogout}>
          🚪
          <h3>Logout</h3>
        </div>

      </div>

    </div>
  );
}

export default PatientDashboard;