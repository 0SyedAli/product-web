import React from "react";
import { FaCheck, FaDollarSign, FaRocket } from "react-icons/fa";

import "./TeamWork.css";

const TeamWork = () => {
  return (
    <div className="Team-Work-Main">
      <div className="container team-work-container">
        <div className="head-tw">
          <div className="head-top-tw">
              <div></div>
            <h5>
              <span>The Power Of TEAMWORK</span>
            </h5>
          </div>
          <h1>
            <span>Together We Are Better.</span>
          </h1>
        </div>
        <div className="body-tw">
          <div className="cards-tw">
            <div className="card-tw card1-tw">
              <div className="logo-tw">
                <li>
                  <FaCheck />
                </li>
              </div>
              <h3>
                <span>Simplicity</span>
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                itaque! Consequuntur iste explicabo. <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                aspernatur sapiente deserunt?
              </p>
            </div>
            <div className="card-tw card2-tw">
              <div className="logo-tw">
                <li>
                  <FaRocket />
                </li>
              </div>
              <h3>
                <span>Simplicity</span>
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                itaque! Consequuntur iste explicabo. <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                aspernatur sapiente deserunt?
              </p>
            </div>
            <div className="card-tw card3-tw">
              <div className="logo-tw">
                <li>
                  <FaDollarSign />
                </li>
              </div>
              <h3>
                <span>Simplicity</span>
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                itaque! Consequuntur iste explicabo. <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                aspernatur sapiente deserunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWork;
