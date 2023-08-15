import React from "react";
import { Carousel } from "react-bootstrap";
import bgBanner from "../../images/desk.png";
import bgBanner1 from "../../images/bg-banner.png";
import bgBanner2 from "../../images/img-bg1.png";
import "./Youtube.css";

function Youtube() {
  return (
    <div className="Product-slides-2">
      <Carousel indicators>
        <Carousel.Item>
          <img className="d-block" src={bgBanner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={bgBanner1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={bgBanner2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Youtube;
