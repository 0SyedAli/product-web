import React from "react";
import "./ProductEmail.css";

const ProductEmail = () => {
  return (
    <div className="section-email">
      <div className="container product-email">
        <div className="head-tw">
        <div className="head-top-tw">
          <div></div>
          <h5>
            <span>YOUR WEBSITE, YOUR WAY</span>
          </h5>
        </div>
        <h1>
          <span>WITH OUR AI WEBSITE CREATOR</span>
        </h1>
      </div>
        <div className="product-email-main">
          <div className="Subscribtion">
            <div className="subscribe-form subscribe-form-2">
              <form action="#">
                <input type="text" placeholder="Enter Your Email Address" />
                <button className="btn-sn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEmail;
