import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>🏥 Book A Doctor</h2>

          <p>
            Book appointments with trusted doctors quickly and
            easily. Your health is our priority.
          </p>
        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Doctors</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 9876543210</p>

          <p><FaEnvelope /> support@bookadoctor.com</p>

          <p><FaMapMarkerAlt /> Kurnool, Andhra Pradesh</p>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="icons">

            <FaFacebookF />

            <FaInstagram />

            <FaLinkedinIn />

            <FaTwitter />

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Book A Doctor. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;