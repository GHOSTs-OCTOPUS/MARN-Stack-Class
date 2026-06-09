import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="container py-5">
      <h1>About Meun</h1>
      <p>
        Welcome to our cafe. We provide premium coffee
        and a relaxing atmosphere.
      </p>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;

