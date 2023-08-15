import React from "react";
import ProductBanner from "./ProductBanner/ProductBanner";
import ProductItem from "./ProductItem/ProductItem";
import Navbar from "../../page/AppBar/Navbar";
import Footer from "../../page/Footer/Footer";
import TeamWork from "../../page/TeamWork/TeamWork";
import WhyToChoose from "./WhyToChoose/WhyToChoose";

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductBanner />
      <ProductItem />
      <WhyToChoose />
      <TeamWork />
      <Footer />
    </div>
  );
};

export default Product;
