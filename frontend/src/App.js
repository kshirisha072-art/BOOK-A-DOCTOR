import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import MyAppointments from "./pages/MyAppointments";
import Reports from "./pages/Reports";
import DoctorAppointments from "./pages/DoctorAppointments";
import Patients from "./pages/Patients";
import DoctorProfile from "./pages/DoctorProfile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/appointment/:id" element={<Appointment />} />

        <Route path="/my-appointments" element={<MyAppointments />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/doctor-appointments" element={<DoctorAppointments />} />
        
<Route path="/patients" element={<Patients />} />

<Route path="/doctor-profile" element={<DoctorProfile />} />

        <Route
          path="/patient-dashboard"
          element={<PatientDashboard />}
        />

        <Route
          path="/doctor-dashboard"
          element={<DoctorDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
