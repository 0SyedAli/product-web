import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import "./ProductSlides.css";
import sec31 from "../../images/mobile-pr6.png";
const ProductSlides = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will trigger once when it comes into view
    threshold: 0.9, // Adjust the threshold as needed for when the component should start animating
  });

  const slideInAnimation = useSpring({
    transform: inView ? "translateX(0%)" : "translateX(-100%)",
  });

  return (
    <div className="container product-slides">
      <div ref={ref} style={{ overflow: "hidden" }}>
        {/* <div className="head-slides">
          <h3>YOUR WEBSITE, YOUR WAY</h3>
          <h1>WITH OUR AI WEBSITE CREATOR</h1>
        </div> */}

        <div className="head-tw">
          <div className="head-top-tw">
            <div></div>
            <h5>
              <span>The Power Of TEAMWORK</span>
            </h5>
          </div>
          <h1>
            <span>Together We Are Better.</span>
          </h1>
        </div>
        <div className="main-slides">
          <div className="left-slides">
            <animated.div style={{ ...slideInAnimation }}>
              <h4>HOCOOS BUILDS BETTER WEBSITES</h4>
              <p>
                Take your business from an idea in mind to a website online in
                under 5 minutes. No complex coding or design headaches for you.
              </p>
              <p>
                Answer 8 simple questions about your business, then just sit
                back and watch our AI website builder do the hard work, turning
                your answers into custom content.
              </p>
            </animated.div>
          </div>
          <div className="right-slides">
            <img src={sec31} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlides;
