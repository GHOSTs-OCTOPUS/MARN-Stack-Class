import hero from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >
      <div className="overlay">

        <div className="container text-center text-white">

          <p className="small-title">
            WANT TO HAVE A GOOD TIME AND DRINK SOME COFFEE?
          </p>

          <h1>
            eCommerce HTML Theme for Cafe
          </h1>

          <p className="hero-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button className="btn btn-pink rounded-pill">
            Read More
          </button>

        </div>

      </div>
    </section>
  );
}