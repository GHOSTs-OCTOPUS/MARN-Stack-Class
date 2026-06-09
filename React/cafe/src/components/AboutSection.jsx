import img from "../assets/MWZ2987_wallpaper1.jpg"
import img1 from "../assets/coffee-latter-with-cookies-croissant-side-view_141793-12170.avif"

const AboutSection = () => {
  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center mb-5">
          You will enjoy our cafe if you love...
        </h2>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={img1} alt="image" style={{ height: "350px", width: "100%" }} />
          </div>

          <div className="col-md-6">
            <h3 className="pink-text">
              Homely atmosphere
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <button className="btn btn-pink">
              View More
            </button>
          </div>
        </div>

        <div className="row align-items-center">

          <div className="col-md-6 order-2 order-md-1">
            <h3 className="pink-text">
              Excellent Service
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <button className="btn btn-pink">
              More Info
            </button>
          </div>

          <div className="col-md-6 order-1 order-md-2">
            <img src={img} alt="image" style={{ height: "350px", width: "100%" }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;