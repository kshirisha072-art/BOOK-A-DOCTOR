import "./Services.css";
import {
  FaHeartbeat,
  FaBrain,
  FaTooth,
  FaBone,
  FaEye,
  FaBaby
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      description: "Expert heart care with experienced specialists."
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      description: "Advanced treatment for brain and nervous system disorders."
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      description: "Complete healthcare services for infants and children."
    },
    {
      icon: <FaBone />,
      title: "Orthopedics",
      description: "Specialized treatment for bones and joints."
    },
    {
      icon: <FaTooth />,
      title: "Dentistry",
      description: "Quality dental care with modern technology."
    },
    {
      icon: <FaEye />,
      title: "Ophthalmology",
      description: "Professional eye care and vision treatment."
    }
  ];

  return (
    <section className="services">
      <h2>Our Medical Services</h2>
      <p>
        We provide trusted healthcare services across multiple medical specialties.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;