import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-icon">🏥</span>
        <h2>Book A Doctor</h2>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/doctors">Doctors</Link>
        </li>

        <li>
          <a href="#why">About</a>
        </li>

        <li>
          <a href="#footer">Contact</a>
        </li>

      </ul>

      <div className="nav-buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;