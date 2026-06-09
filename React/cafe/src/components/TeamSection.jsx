import Team3 from "../assets/images.JPG";
import Team2 from "../assets/images (1).jpg";
import Team1 from "../assets/images.JPG";


const TeamSection = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">

        <h2>Meet our waiters team</h2>
        <p>Lorem Ipsum Dolor Sit Amet</p>

        <div className="row mt-5">

          <div className="col-md-4">
            <img src={Team1} alt="TeamMember" style={{ height: "80%", width: "50%" }} />
          </div>

          <div className="col-md-4">
            <img src={Team2} alt="TeamMember" style={{ height: "80%", width: "50%" }} />
          </div>

          <div className="col-md-4">
            <img src={Team3} alt="TeamMember" style={{ height: "80%", width: "50%" }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;