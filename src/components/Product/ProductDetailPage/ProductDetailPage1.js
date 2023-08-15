import React from "react";
import "./ProductDetailPage1.css";
import ChatAppImg from "../../../images/dashboard2.png";
import Navbar from "../../../page/AppBar/Navbar";
import Footer from "../../../page/Footer/Footer";
import ProductPageNav from "../../../page/AppBar/ProductPageNav/ProductPageNav";

const ProductDetailPage1 = () => {
  return (
    <>
      <ProductPageNav />
      <div className="product-detail-main">
        <div className="product-detail-container container">
          <div className="pdc-left">
            <div className="pdc-left-img">
              <img src={ChatAppImg} alt="" />
            </div>
            <div className="pdc-left-desc">
              <h2>Theme Description</h2>
              <hr />
              <p>
                Introducing the Dynamic Data Dashboard – your command center for
                data-driven decision-making. Seamlessly gather, analyze, and
                visualize your data in real-time, all within a single, intuitive
                platform. Whether you're a business analyst, project manager, or
                marketing professional, our dashboard empowers you to unlock
                insights and streamline your operations like never before.
              </p>
              <br />
              <h2>Key Features</h2>
              <hr />
              <br />
              <h5>Real-Time Data Visualization</h5>
              <p>
                Transform raw data into stunning visualizations that tell a
                compelling story. Monitor key metrics and trends at a glance,
                making it easy to identify opportunities and challenges in
                real-time.
              </p>
              <br />
              <h5>Drag-and-Drop Customization</h5>
              <p>
                Tailor your dashboard to your unique needs with our intuitive
                drag-and-drop interface. Choose from a rich library of widgets
                and charts to build a dashboard that perfectly aligns with your
                objectives.
              </p>
              <br />
              <h5>Data Integration</h5>
              <p>
                Seamlessly connect your data sources – from spreadsheets to
                cloud databases. Our dashboard supports integration with popular
                tools, ensuring you have a comprehensive view of your data
                ecosystem.
              </p>
              <br />
              <h5>Interactive Insights</h5>
              <p>
                Dive deeper into your data with interactive features. Drill down
                into charts, filter data, and explore relationships with just a
                few clicks, uncovering valuable insights that drive strategic
                decisions.
              </p>
              <br />
              <h5>Collaboration and Sharing</h5>
              <p>
                Foster collaboration by sharing your dashboard with team members
                and stakeholders. Keep everyone on the same page with real-time
                updates and customizable access levels.
              </p>
              <br />
              <h5>Mobile-Optimized</h5>
              <p>
                Access your dashboard on the go. Our mobile-optimized design
                ensures that you can stay informed and make decisions from any
                device, wherever you are.
              </p>
            </div>
          </div>
          <div className="pdc-right">
            <div className="pdc-right-top">
              <h1>Dashboard Reactjs</h1>
              <h2>$79.99</h2>
              <button className="pdc-btn-preview">Live Preview</button>
              <button className="pdc-btn-purchase">Purchase Now</button>
              <p className="lineText text-center mt-6">
                <span>OR</span>
              </p>
              <div className="prb-discount-offer">
                <div className="prd-d-o-inner">
                  <p className="offer">Get 50% OFF!</p>
                  <h4>Unlimited Access To All Nextjs Templates!</h4>
                  <p>
                    Get lifetime access to all of our current Nextjs Templates +
                    All upcoming Templates for only
                    <br />
                    <strong>$99</strong>!
                  </p>
                  <button className="gt-deal-now">Grab This Deal Now</button>
                </div>
              </div>
            </div>
            <div className="pdc-right-bottom">
              <h1>Theme Information</h1>
              <br />
              <hr />
              <div className="pdc-r-b-line1">
                <p>Updated</p>
                <p className="colon">:</p>
                <h5>
                  About 1 Month <br />
                  Ago
                </h5>
              </div>
              <div className="pdc-r-b-line1">
                <p>Updated</p>
                <p className="colon">:</p>
                <h5>
                  About 1 Month <br />
                  Ago
                </h5>
              </div>
              <div className="pdc-r-b-line1">
                <p>Updated</p>
                <p className="colon">:</p>
                <h5>
                  About 1 Month <br />
                  Ago
                </h5>
              </div>
              <div className="pdc-r-b-line1">
                <p>Updated</p>
                <p className="colon">:</p>
                <h5>
                  About 1 Month <br />
                  Ago
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage1;
