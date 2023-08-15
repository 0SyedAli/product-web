import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const ScrollComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will trigger once when it comes into view
    threshold: 0.5, // Adjust the threshold as needed for when the component should start animating
  });

  const slideInAnimation = useSpring({
    transform: inView ? 'translateX(0)' : 'translateX(100%)',
  });

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <animated.div style={{ ...slideInAnimation, minWidth: '100%', maxWidth: '100%' }}>
        {/* Your content here */}
        <h2>Content Sliding In from the </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </animated.div>
    </div>
  );
};

export default ScrollComponent;
