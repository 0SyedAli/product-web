import Banner from "../page/Banner/Banner";
// import Youtube from '../page/Youtube/Youtube'
import ProductSlides from "../page/ProductSlides/ProductSlides";
import ProductSlides2 from "../page/ProductSlides2/ProductSlides2";
import ProductSlides4 from "../page/ProductSlides4/ProductSlides4";
import ProductSlides3 from "../page/ProductSlides3/ProductSlides3";
import ProductEmail from "../page/ProductEmail/ProductEmail";
import MyCarousel from "../page/Slides/MyCarousel";
import ScrollTop from "../page/ScrollTop/ScrollTop";
import TeamWork from '../page/TeamWork/TeamWork'
import Footer from "../page/Footer/Footer";
import Navbar from "../page/AppBar/Navbar";

const Home = () => {

  

  return (
    <div>
      <Navbar />
      <Banner />
      <TeamWork />
      <MyCarousel />
      <ProductSlides />
      <ProductSlides2 />
      <ProductSlides4 />
      <ProductSlides3 />
      <ProductEmail />
      <ScrollTop />
      <Footer />

      {/* <TestimonialCard /> */}
    </div>
  );
};
export default Home;
