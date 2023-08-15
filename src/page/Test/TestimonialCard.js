import React, { useState } from "react";
import "./TestimonialCard.css"; // Import CSS file for styling
import TestimonialsPage from "./TestimonialsPage";
import img1 from "../../images/profile.png";
import icon from "../../images/Germany.png";

const testimonialsData = [
  {
    id: 1,
    image: img1,
    name: "John Doe",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },
  {
    id: 2,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },
  {
    id: 3,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },
  {
    id: 4,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },
  {
    id: 5,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },
  {
    id: 6,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },
  {
    id: 7,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },

  {
    id: 8,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },

  {
    id: 9,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },

  {
    id: 10,
    image: img1,
    name: "Jane Smith",
    comment:
      "I had an amazing experience working with this team. They were responsive, reliable, and delivered exactly what I needed.",
    socialIcon: icon,
  },
];

const TestimonialCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  return (
    <div className="main-testimonial-container">
      <div className="testimonial-container">
        {testimonialsData.map((testimonial) => (
          <TestimonialsPage
            key={testimonial.id}
            testimonial={testimonial}
            onHover={handleHover}
          />
        ))}
      </div>
      <div className="testimonial-content">
        <h1>
          Upgrade your team’s workflow <br />
          and iterate with stability.
        </h1>
        <button className="testimonial-btn">Sign Up --{">"}</button>
      </div>
      <div className="testimonial-bg-layer"></div>
    </div>
  );
};

export default TestimonialCard;