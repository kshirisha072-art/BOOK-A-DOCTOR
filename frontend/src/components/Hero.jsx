import "./Hero.css";
import doctor from "../assets/images/hero-doctor.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Your Health,
          <br />
          Our Priority
        </h1>

        <p>
          Book appointments with experienced doctors,
          manage your health records and receive quality
          healthcare from the comfort of your home.
        </p>

        <div className="hero-buttons">
          <button className="book-btn">Book Appointment</button>
          <button className="doctor-btn">Find Doctors</button>
        </div>

      </div>

      <div className="hero-right">
        <img src={doctor} alt="Doctor" />
      </div>

    </section>
  );
}

export default Hero;