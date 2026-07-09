import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      image: "https://i.pravatar.cc/150?img=12",
      rating: "★★★★★",
      review:
        "Amazing shopping experience! The products are high quality and delivery was super fast.",
    },
    {
      id: 2,
      name: "Priya Patel",
      image: "https://i.pravatar.cc/150?img=32",
      rating: "★★★★★",
      review:
        "The customer support is excellent. I received my order exactly as expected. Highly recommended!",
    },
    {
      id: 3,
      name: "Rahul Verma",
      image: "https://i.pravatar.cc/150?img=18",
      rating: "★★★★★",
      review:
        "ShopCart has become my favorite online store. Great offers and an easy checkout process.",
    },
  ];

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Customers Say</h2>
          <p className="text-muted">Trusted by thousands of happy customers.</p>
        </div>

        <div className="row g-4">
          {reviews.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="testimonial-card">
                <img src={item.image} alt={item.name} />
                <h5>{item.name}</h5>
                <div className="rating">{item.rating}</div>
                <p>{item.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
