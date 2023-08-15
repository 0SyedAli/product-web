import React from "react";
import aboutImg from "../../../images/about-main.png";
import './AboutBanner.css'
const About = () => {
  return (
    <>
      <div className="about-banner-main">
        <div className="about-banner-container container">
          <div className="about-content-left">
            <h1>
              <span>About Us...</span>
            </h1>
            <p>
              <span>
                Welcome to AETSMSOFT, a technology company that provides
                innovative software development solutions. Our team comprises
                skilled professionals who are committed to delivering
                exceptional services to our clients. On this About page, we will
                share more information about who we are and what we do.
              </span>
            </p>
            <div className="btn-contact-outer">
              <button className="btn-contact" type="submit">
                Subscribe
              </button>
            </div>
          </div>
          <div className="about-image-right">
            <div className="about-image">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
