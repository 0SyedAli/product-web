import './ScrollTop.css'
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div
      className="scroll-to-top-button"
      onClick={handleScrollToTop}
      title="Scroll to Top"
    >
      <li><FaArrowUp /></li>
    </div>
  );
};

export default ScrollTop;
