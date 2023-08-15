import React from "react";
import Navbar from "../../page/AppBar/Navbar";
import Footer from "../../page/Footer/Footer";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutWhoWeAre from "./AboutWhoWeAre/AboutWhoWeAre";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-main">
        <AboutBanner />
        <AboutWhoWeAre />
      </div>
      <Footer />
    </>
  );
};

export default About;
