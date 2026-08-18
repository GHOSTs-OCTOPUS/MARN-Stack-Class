import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import ReasonsSection from "../components/ReasonsSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <ReasonsSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Home;