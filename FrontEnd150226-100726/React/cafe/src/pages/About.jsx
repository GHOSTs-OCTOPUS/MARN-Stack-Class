import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Features from "../components/Features";

const About = () => {
  return (
    <div className="container py-5">
      <h1>About Us</h1>
      <p>
        Welcome to our cafe. We provide premium coffee
        and a relaxing atmosphere.
      </p>
      <Hero />
      <Features />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;