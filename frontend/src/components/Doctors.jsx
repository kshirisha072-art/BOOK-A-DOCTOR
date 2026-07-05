import "./Doctors.css";

import doctor1 from "../assets/images/doctor1.png";
import doctor2 from "../assets/images/doctor2.png";
import doctor3 from "../assets/images/doctor3.png";
import doctor4 from "../assets/images/doctor4.png";

function Doctors() {
  const doctors = [
  {
    image: doctor1,
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    experience: "10+ Years",
    fee: "₹500",
    rating: "4.9"
  },
  {
    image: doctor2,
    name: "Dr. Arjun Kumar",
    specialization: "Neurologist",
    experience: "8+ Years",
    fee: "₹700",
    rating: "4.8"
  },
  {
    image: doctor3,
    name: "Dr. Sneha Reddy",
    specialization: "Pediatrician",
    experience: "6+ Years",
    fee: "₹600",
    rating: "4.9"
  },
  {
    image: doctor4,
    name: "Dr. Rahul Verma",
    specialization: "Orthopedic",
    experience: "12+ Years",
    fee: "₹800",
    rating: "5.0"
  }
];

  return (
    <section className="doctors">

      <h2>Featured Doctors</h2>

      <p>
        Meet our experienced specialists and book your appointment in just a few clicks.
      </p>

      <div className="doctor-grid">

        {doctors.map((doctor, index) => (

          <div className="doctor-card" key={index}>

            <img src={doctor.image} alt={doctor.name} />

            <h3>{doctor.name}</h3>

            <span>{doctor.specialization}</span>

            <p>Experience: {doctor.experience}</p>

            <h4>{doctor.fee}</h4>

            <div className="rating">
                ⭐ {doctor.rating}
            </div>

            <button>Book Appointment</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Doctors;