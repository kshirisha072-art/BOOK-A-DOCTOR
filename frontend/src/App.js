import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default App;