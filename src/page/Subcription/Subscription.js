import React from "react";
import "./Subscription.css";
const Subscription = () => {
  return (
    <div>
      <div className="Subscribtion">
        <h1>Subscribe and Get</h1>
        <h1>20% Off Your First Purchase</h1>
        <div className="col-xl-7 col-lg-7 margin-top-subs">
          <div className="subscribe-form subscribe-form-2">
            <h5>
              <span>*</span> Email
            </h5>
            <form action="#">
              <input type="text" placeholder="Enter Your Email Address" />
              <button className="btn-sn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
