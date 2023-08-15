import React from "react";
import Navbar from '../../page/AppBar/Navbar'
import { useInView } from "react-intersection-observer";
import { useSpring } from "react-spring";
import imgContact from "../../images/contact-image-1-section-3.png";
import "./Contact.css";
import Footer from "../../page/Footer/Footer";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will trigger once when it comes into view
    threshold: 0.5, // Adjust the threshold as needed for when the component should start animating
  });

  // eslint-disable-next-line no-unused-vars
  // const slideInAnimation = useSpring({
  //   transform: inView ? "translateX(0)" : "translateX(100%)",
  // });

  return (
    <>
    <Navbar />
    <div className="contact-main">
      <div className="container contact-container">
        <div className="contact-head">
          <h1>
            <span>
              HOCOOS AI <br /> WEBSITE BUILDER
            </span>
          </h1>
          <h5>(don't worry, customer support is 100% human)</h5>
        </div>
        {/* <section className="kmb-section section-marquee bg-purple pos-rel">
          <div className="marquee">
            <ul className="marquee-content">
              <li className="marquee-text vary-xblack text-uppercase text-nowrap">
                teamwork is <span className="dreamwork">dreamwork</span>
              </li>
            </ul>
            <ul className="marquee-content">
              <li className="marquee-text vary-xblack text-uppercase text-nowrap">
                teamwork is <span className="dreamwork">dreamwork</span>
              </li>
            </ul>
          </div>
          <div className="marquee marquee-reverse">
            <ul className="marquee-content">
              <li className="marquee-text vary-xblack text-uppercase text-nowrap">
                teamwork is <span className="dreamwork">dreamwork</span>
              </li>
            </ul>
            <ul className="marquee-content">
              <li className="marquee-text vary-xblack text-uppercase text-nowrap">
                teamwork is <span className="dreamwork">dreamwork</span>
              </li>
            </ul>
          </div>
        </section> */}

        <div ref={ref} style={{ overflow: "hidden" }}>
          <div className="contact-body">
            <div className="left-contact">
              <img src={imgContact} alt="" />
            </div>
            <div className="right-contact">
              <div className="right-contact-inner">
                <form method="post">
                  <div className="form-input">
                    <input
                      type="text"
                      className="form-control name"
                      autoComplete="given-name"
                      required
                      placeholder="Name"
                      aria-label="name"
                      name="name"
                    />
                  </div>
                  <div className="form-input ">
                    <input
                      type="tel"
                      className="form-control phone"
                      autoComplete="mobile"
                      required
                      placeholder="Phone"
                      aria-label="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="phone"
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="email"
                      className="form-control email"
                      autoComplete="email"
                      required
                      placeholder="Email"
                      aria-label="email"
                      name="email"
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="message"
                      className="form-control message"
                      autoComplete="off"
                      required
                      placeholder="Message"
                      aria-label="message"
                    />
                  </div>
                  <div className="btn-contact-outer">
                    <button className="btn-contact" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Contact;
