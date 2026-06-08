export default function TeamSection() {
  return (
    <section className="py-5">

      <div className="container text-center">

        <h2>Meet our waiters team</h2>

        <p>Lorem ipsum dolor sit amet</p>

        <div className="row mt-5">

          <div className="col-md-4">
            <img
              src="/team1.jpg"
              className="img-fluid"
            />
          </div>

          <div className="col-md-4">
            <img
              src="/team2.jpg"
              className="img-fluid"
            />
          </div>

          <div className="col-md-4">
            <img
              src="/team3.jpg"
              className="img-fluid"
            />
          </div>

        </div>

      </div>

    </section>
  );
}