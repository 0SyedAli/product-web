import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import "./ProductSlides4.css";
import sec34 from "../../images/mobile-pr2.png";
const ProductSlides3 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will trigger once when it comes into view
    threshold: 0.5, // Adjust the threshold as needed for when the component should start animating
    
  });

  const slideInAnimation = useSpring({
    transform: inView ? "translateX(0)" : "translateX(-100%)",  
  });
  return (
    <div className="container product-slides4">
      <div ref={ref} style={{ overflow: "hidden" }}>
        <div className="main-slide4">
          <div className="left-slides">
            <animated.div style={{ ...slideInAnimation }}>
              <h4>HOCOOS IS MUCH MORE THAN JUST WEBSITES</h4>
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
            <img src={sec34} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlides3;
