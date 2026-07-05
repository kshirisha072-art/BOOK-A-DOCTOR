import "./WhyChooseUs.css";
import { FaUserMd, FaClock, FaHospital, FaShieldAlt } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserMd />,
      title: "Experienced Doctors",
      text: "Consult highly qualified specialists with years of experience."
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      text: "Book appointments anytime with our easy online platform."
    },
    {
      icon: <FaHospital />,
      title: "Modern Facilities",
      text: "Access quality healthcare with advanced medical technology."
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted & Secure",
      text: "Your health records and appointments are kept safe and secure."
    }
  ];

  return (
    <section className="why" id="why">
      <h2>Why Choose Us?</h2>
      <p>Your health is our priority. We provide trusted healthcare services with expert doctors.</p>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;