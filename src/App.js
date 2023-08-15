  import React from "react";
  // import Navbar from "./page/AppBar/Navbar";
  import { Route, Routes } from "react-router-dom";
  import Home from "./components/Home";
  import Contact from "./components/Contact/Contact";
  import Login from "./components/LoginFile/Login";
  import Product from "./components/Product/Product";
  import About from "./components/About/About";
  import ProductDetailPage1 from "./components/Product/ProductDetailPage/ProductDetailPage1";

  const App = () => {
    

    return (
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productitem" element={<ProductDetailPage1 />} />
        </Routes>
      </div>
    );
  };
  export default App;
