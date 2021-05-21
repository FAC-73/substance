import React from "react";
import { Link } from "react-router-dom";

function HomeCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="hero-text animated-text">I'm Kay</h1>
          <h1 className="hero-text-subtle animated-text">
            A UI Designer by day, and a budding Front-end Developer by night.
          </h1>
          <div className="flex-center">
            <Link to="/Portfolio">
              <button className="hero-button">
                <i class="far fa-eye"></i>View projects
              </button>
            </Link>

            <a
              href="https://fac-73.github.io/mr-disco/assets/Images/kay-davis-cv.pdf"
              target="_blank"
            >
              <button className="hero-button">
                <i class="fas fa-file-download"></i>Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
