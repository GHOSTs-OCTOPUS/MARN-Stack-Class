import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <div className="container py-5">
      <h1>About Team</h1>
      <p>
        Welcome to our cafe. We provide premium coffee
        and a relaxing atmosphere.
      </p>
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;