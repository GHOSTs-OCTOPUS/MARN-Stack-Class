function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >
      <div className="overlay">
        <div className="container hero-content">
          <h1>HTML Layout Templates</h1>

          <p>
            HTML Layout Templates. Have greater success. Believe in your
            partners. Produce exciting tasks. Learn helpful technologies.
          </p>

          <div className="d-flex gap-3">
            <button className="btn btn-dark px-4">More Info</button>
            <button className="btn btn-warning px-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;