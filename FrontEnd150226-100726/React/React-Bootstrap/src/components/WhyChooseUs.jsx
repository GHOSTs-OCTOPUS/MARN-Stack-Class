import 'bootstrap-icons/font/bootstrap-icons.css';

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">

        <div className="row align-items-center mb-5">
          <div className="col-md-2 text-center">
            <i className="bi bi-house-fill home-icon"></i>
          </div>

          <div className="col-md-8">
            <h2>Why should you choose us?</h2>

            <p>
              Our service is so excellent because of our great workers,
              individual training plan, our forces and our standards.
            </p>
          </div>

          <div className="col-md-2 text-end">
            <button className="btn btn-primary">
              More Info
            </button>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-4">

            <div className="feature-card active">
              <h5>Best Masters</h5>
              <p>
                We are a consulting company that can help you optimize your
                working process.
              </p>
            </div>

            <div className="feature-card">
              <h5>Modern Tool</h5>
              <p>
                There is nothing that can't be fixed in our connections.
              </p>
            </div>

            <div className="feature-card">
              <h5>Your Design</h5>
              <p>
                We are one of the greatest firms in the restructuring
                business.
              </p>
            </div>

          </div>

          <div className="col-lg-8">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
              alt=""
              className="img-fluid worker-img"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;