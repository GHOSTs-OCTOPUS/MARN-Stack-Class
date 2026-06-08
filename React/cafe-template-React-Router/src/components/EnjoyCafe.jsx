import cafe1 from "../assets/images/cafe-1.jpg";
import cafe2 from "../assets/images/cafe-2.jpg";

export default function EnjoyCafe() {
  return (
    <section className="py-5">

      <div className="container">

        <h2 className="text-center mb-5">
          You will enjoy our cafe if you love...
        </h2>

        <div className="row align-items-center mb-5">

          <div className="col-lg-6">
            <img src={cafe1} className="img-fluid" />
          </div>

          <div className="col-lg-6">
            <h3>Homely atmosphere</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <button className="btn btn-pink rounded-pill">
              View More
            </button>
          </div>

        </div>

        <div className="row align-items-center">

          <div className="col-lg-6">
            <h3>Excellent service</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <button className="btn btn-pink rounded-pill">
              More Info
            </button>
          </div>

          <div className="col-lg-6">
            <img src={cafe2} className="img-fluid" />
          </div>

        </div>

      </div>

    </section>
  );
}