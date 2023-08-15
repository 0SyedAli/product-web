import React from "react";
import productImage from '../../../images/product-image.png'
import './ProductBanner.css'
import Navbar from "../../../page/AppBar/Navbar";

const ProductBanner = () => {
  return (
    <div>
      <div className="product-main">
        <div className="product-container">
          <div className="product-banner">
            <div className="pb-content">
              <h1>
                <span>Discover Our High-Quality Products</span>
              </h1>
              <p>
                <span>
                  Welcome to AETSM-SOFT, where quality meets innovation. Our
                  carefully curated selection of products is designed to enhance
                  your life and elevate your everyday experiences. From
                  cutting-edge technology to timeless classics, we take pride in
                  offering a diverse range that caters to your unique needs.
                </span>
              </p>
            </div>
            <div className="pb-image">
              <img src={productImage} alt="products" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
