// import "./Footer.css";
// import aus from "../../images/Australia.png";
// import ger from "../../images/Germany.png";
// import spa from "../../images/Spain.png";
// import tur from "../../images/Turkey.png";
// import uk from "../../images/United kingdom.png";
// import us from "../../images/United states of america.png";

// const Footer = () => {
//   return (
//     <div className="section-footer">
//       <footer className="container footer">
//         <div className="social-media">
//           <ul className="social-icons">
//             <li>Instagram</li>
//             <li>Youtube</li>
//             <li>Facebook</li>
//             <li>Twitter</li>
//             <li>LinkedIn</li>
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>
//         <hr className="divider" />
//         <div className="promotion">
//           <h1>20% Off Your First Purchase</h1>
//           <div className="image-container">
//             <img src={aus} alt="img" />
//             <img src={ger} alt="img" />
//             <img src={spa} alt="img" />
//             <img src={tur} alt="img" />
//             <img src={uk} alt="img" />
//             <img src={us} alt="img" />
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted myFooter">
    <div className="shadow-footer1"></div>
    <div className="shadow-footer2"></div>
    {/* Section: Social media */}
    <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div style={{zIndex:'1'}}>
        <a href='/' className="social-link-footer me-2 text-reset social-link-border social-link-border-active">
          <i className="fab fa-facebook-f" />
        </a>
        <a href='/' className="social-link-footer me-2 text-reset social-link-border">
          <i className="fab fa-twitter" />
        </a>
        <a href='/' className="social-link-footer me-2 text-reset social-link-border">
          <i className="fab fa-google" />
        </a>
        <a href='/' className="social-link-footer me-2 text-reset social-link-border">
          <i className="fab fa-instagram" />
        </a>
        <a href='/' className="social-link-footer me-2 text-reset social-link-border">
          <i className="fab fa-linkedin" />
        </a>
        <a href='/' className="social-link-footer me-2 text-reset social-link-border">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{zIndex:'1'}}>
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />AETSM-SOFT PRODUCTS
            </h6>
            <p>
            This page highlights the main features and functionalities of your product. Use clear and engaging visuals to explain how your product can benefit the users.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{zIndex:'1'}}>
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="/" className="text-reset footer-text-hover">Angular</a>
            </p>
            <p>
              <a href="/" className="text-reset footer-text-hover">React</a>
            </p>
            <p>
              <a href="/" className="text-reset footer-text-hover">Vue</a>
            </p>
            <p>
              <a href="/" className="text-reset footer-text-hover">Laravel</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{zIndex:'1'}}>
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="/" className="text-reset footer-text-hover">Pricing</a>
            </p>
            <p>
              <a href="/" className="text-reset footer-text-hover">Settings</a>
            </p>
            <p>
              <a href="/" className="text-reset footer-text-hover">Orders</a>
            </p>
            <p>
              <a href="/" className="text-reset footer-text-hover">Help</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="Contact-footer col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{zIndex:'1'}}>
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p className='footer-text-hover'><i className="fas fa-home me-3 " /> New York, NY 10012, US</p>
            <p className='footer-text-hover'>
              <i className="fas fa-envelope me-3 " />
              info@example.com
            </p>
            <p className='footer-text-hover'><i className="fas fa-phone me-3 " /> + 01 234 567 88</p>
            <p className='footer-text-hover'><i className="fas fa-print me-3 " /> + 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */} 
    {/* Copyright */}
    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
      <p style={{zIndex:'1', margin:'0'}}>© 2023 Copyright:</p>
      <a className="text-reset fw-bold" href="/" style={{zIndex:'1'}}>ASProduct.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>

  )
}

export default Footer
