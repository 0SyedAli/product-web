import React from "react";
import './Testimonial2.css'

const Testimonial2 = () => {
  return (
    <div>
      <div className="brands">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="brands_slider_container">
                <div className="owl-carousel owl-theme brands_slider">
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_5.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_6.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_7.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="brands_item d-flex flex-column justify-content-center">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_8.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* Brands Slider Navigation */}
                <div className="brands_nav brands_prev">
                  <i className="fas fa-chevron-left" />
                </div>
                <div className="brands_nav brands_next">
                  <i className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
