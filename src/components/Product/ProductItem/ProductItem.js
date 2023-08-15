import React from "react";
import "./ProductItem.css";
import chating from "../../../images/chat-app.png";
import agile from "../../../images/agile.png";
import dasboard from "../../../images/dashboard.png";
import tracker from "../../../images/tracker.jpg";
import bitting from "../../../images/bitting.jpg";
import layout from "../../../images/layout.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="container product-items">
        <div className="head-pi">
          <div className="head-top-pi">
            <div></div>
            <h5>
              <span>Experience the Future of Productivity</span>
            </h5>
          </div>
          <h1>
            <span>Some Product Of AETSM-Soft</span>
          </h1>
          <p>
            <span>
              At AETSM SOFT, we believe in delivering excellence. Each product
              is meticulously crafted using the finest materials and innovative
              techniques, ensuring not only stunning aesthetics but also
              unmatched durability. We're committed to maintaining the highest
              standards of quality because we understand that our products
              become a part of your story.
            </span>
          </p>
        </div>
        <div className="pi-cards container">
          <Row>
            <Col
              className="pi-gap-col"
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <div className="screens-main bg-primary-transparent">
                <Link to="/productitem" onClick={handleNavLinkClick}>
                  <div className="overflow-hidden bg-style max-height-demo-page">
                    <img src={chating} className="img-fluid" alt="Dashboard" />
                  </div>
                  <h6 className="text-default p-4 border-top-0 mb-0">
                    Chat Application
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </h6>
                </Link>
              </div>
            </Col>
            <Col
              className="pi-gap-col"
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <div className="screens-main bg-primary-transparent">
                <Link to="/productitem" onClick={handleNavLinkClick}>
                  <div className="overflow-hidden bg-style max-height-demo-page">
                    <a href="dist/html/chat.html" target="_blank">
                      <img src={agile} className="img-fluid" alt="Dashboard" />
                    </a>
                  </div>
                  <h6 className="text-default p-4 border-top-0 mb-0">
                    Agile Application
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </h6>
                </Link>
              </div>
            </Col>
            <Col
              className="pi-gap-col"
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <div className="screens-main bg-primary-transparent">
                <Link to="/productitem" onClick={handleNavLinkClick}>
                  <div className="overflow-hidden bg-style max-height-demo-page">
                    <a href="dist/html/chat.html" target="_blank">
                      <img
                        src={tracker}
                        className="img-fluid"
                        alt="Dashboard"
                      />
                    </a>
                  </div>
                  <h6 className="text-default p-4 border-top-0 mb-0">
                    Dashbaord Application
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </h6>
                </Link>
              </div>
            </Col>
            <Col
              className="pi-gap-col"
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <div className="screens-main bg-primary-transparent">
                <Link to="/productitem" onClick={handleNavLinkClick}>
                  <div className="overflow-hidden bg-style max-height-demo-page">
                    <a href="dist/html/chat.html" target="_blank">
                      <img
                        src={dasboard}
                        className="img-fluid"
                        alt="Dashboard"
                      />
                    </a>
                  </div>
                  <h6 className="text-default p-4 border-top-0 mb-0">
                    Webs Application
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </h6>
                </Link>
              </div>
            </Col>
            <Col
              className="pi-gap-col"
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <div className="screens-main bg-primary-transparent">
                <Link to="/productitem" onClick={handleNavLinkClick}>
                  <div className="overflow-hidden bg-style max-height-demo-page">
                    <a href="dist/html/chat.html" target="_blank">
                      <img src={layout} className="img-fluid" alt="Dashboard" />
                    </a>
                  </div>
                  <h6 className="text-default p-4 border-top-0 mb-0">
                    Andriod Application
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </h6>
                </Link>
              </div>
            </Col>
            <Col
              className="pi-gap-col"
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <div className="screens-main bg-primary-transparent">
                <Link to="/productitem" onClick={handleNavLinkClick}>
                  <div className="overflow-hidden bg-style max-height-demo-page">
                    <a href="dist/html/chat.html" target="_blank">
                      <img
                        src={bitting}
                        className="img-fluid"
                        alt="Dashboard"
                      />
                    </a>
                  </div>
                  <h6 className="text-default p-4 border-top-0 mb-0">
                    IOS Application
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </h6>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
