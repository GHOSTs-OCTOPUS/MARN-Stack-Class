import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  return (
    <section className="cart-section py-5 pt-5 mt-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Shopping Cart</h2>

        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cartItems.map((v) => (
              <div className="cart-card mb-3" key="">
                <div className="row g-2 align-items-center">
                  <div className="col-lg-2 text-center">
                    <img src={v.thumbnail} alt="" className="product-img" />
                  </div>

                  <div className="col-lg-4 text-center">
                    <h5 className="mb-1">{v.category}</h5>
                    <p className="text-muted mb-0">{v.title}</p>
                  </div>

                  <div className="col-lg-2 text-center">
                    <h6 className="fw-bold text-success">{v.price}</h6>
                  </div>

                  <div className="col-lg-2">
                    <div className="qty-box">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <button className="btn btn-outline-danger w-100">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              className="btn btn-clear"
              onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="summary-card">
              <h4 className="mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <strong>₹1,44,999</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Discount</span>
                <strong>-₹5,000</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5 className="text-success">₹1,39,999</h5>
              </div>

              <button className="btn checkout-btn w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
