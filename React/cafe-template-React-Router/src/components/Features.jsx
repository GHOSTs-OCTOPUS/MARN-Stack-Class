export default function Features() {
  const data = [
    {
      title: "Best Coffee",
      icon: "bi-cup-hot"
    },
    {
      title: "Fast Cooking",
      icon: "bi-clock"
    },
    {
      title: "Free Delivery",
      icon: "bi-truck"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="row g-0 shadow">

          {data.map((item, index) => (
            <div
              className="col-md-4 feature-box"
              key={index}
            >
              <i className={`bi ${item.icon}`}></i>
              <h6>{item.title}</h6>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}