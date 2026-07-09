import React, { useEffect, useState } from "react";
import "./Products.css";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const apidata = await res.json();
      setData(apidata.products);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container " style={{ paddingTop: "130px", marginBottom: "50px" }}>
        <div className="row g-3">
          {data.map((v) => (
            <>
              <div className="col-xl-3 col-lg-4" key={v.id}>
                <div className="card h-100">
                  {" "}
                  <img src={v.images[0]} style={{ height: "200px", width: "200px" }}
                    className="card-img-top ms-auto" alt="..."/>

                  <div className="card-body">
                    <h5 className="card-title">{v.title.slice(0, 23)}...</h5>
                    <p className="card-text">{v.description.slice(0, 70)}...</p>
                    <div className="d-flex justify-content-evenly">
                      <button className="btn product-btn" style={{
                          backgroundClip: "white", color: "black", 
                          fontWeight: "600", boxShadow: "3px 3px 5px gray",
                        }}>
                        ${v.price}
                      </button>

                      <button
                        className="btn btn-primary"
                        
                        style={{ backgroundColor: "#3a6382fa", border: "none",
                          fontWeight: "600", boxShadow: "5px 5px 5px gray",
                        }}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
