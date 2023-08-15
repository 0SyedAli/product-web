import React from "react";
import "./TestimonialsPage.css";

const TestimonialsPage = ({ testimonial, onHover }) => {
  return (
    <div
      className={`testimonial-inner-item inner-item ${
        onHover ? "animate-left-to-right" : ""
      }`}
      onMouseEnter={onHover}
    >
      <img src={testimonial.image} alt={testimonial.name} />
      <div className="inner-text">
        <h3>{testimonial.name}</h3>
        <p>{testimonial.comment}</p>
      </div>
    </div>
  );
};

export default TestimonialsPage;
