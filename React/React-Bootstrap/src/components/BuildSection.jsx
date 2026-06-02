function BuildSection() {
  return (
    <section
      className="build-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      <div className="overlay">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <h2>How we build</h2>

              <p>
                HTML Layout Templates. We conclude that it is the single way to
                obtain a well-built improvement.
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-primary">
                  More Info
                </button>

                <button className="btn btn-warning">
                  Get Started
                </button>
              </div>

            </div>

            <div className="col-lg-7 text-center">

              <div className="video-box">

                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  alt=""
                />

                <div className="play-btn">
                  ▶
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BuildSection;