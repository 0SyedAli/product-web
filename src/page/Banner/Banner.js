import React from "react";
import "./Banner.css";
import CurveImg from "../../images/wave_curve.svg";
import bgBanner from "../../images/desk1.png";

// import Youtube from "../Youtube/Youtube";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-section-stars">
        <div className="container banner-container">
          <div className="left-banner">
            <h2>MEET AETSM</h2>
            <h1>
              YOUR AI <br />
              WEBSITE BUILDER
            </h1>
            <p>
              Our AI website builder creates business ready websites in minutes,
              complete with useful text, design, & images. Just answer 8 quick
              questions and your free website is ready to go!
            </p>
              <div className="email-banner">
                <div className="button button-1">Subscribe</div>
              </div>
          </div>
          <div className="right-banner">
            <img src={bgBanner} alt="" />
            {/* <Youtube /> */}
          </div>
        </div>
        {/* <div className="bg-curve-section">
          <img src={CurveImg} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
