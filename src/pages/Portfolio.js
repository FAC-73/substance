import React from "react";
import PortfolioCard from "../components/Cards/PortfolioCard";
import projects from "../assets/projects.json";

function Portfolio() {
  return (
    <div className="container portfolio-bottom">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="row">
        <div className="col-lg-6">
          <PortfolioCard
            name={projects[0].name}
            image={projects[0].image}
            location={projects[0].location}
          />
        </div>
        <div className="col-lg-6">
          <PortfolioCard
            name={projects[1].name}
            image={projects[1].image}
            location={projects[1].location}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <PortfolioCard
            name={projects[2].name}
            image={projects[2].image}
            location={projects[2].location}
          />
        </div>
        <div className="col-lg-6">
          <PortfolioCard
            name={projects[3].name}
            image={projects[3].image}
            location={projects[3].location}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <PortfolioCard
            name={projects[4].name}
            image={projects[4].image}
            location={projects[4].location}
          />
        </div>
        <div className="col-lg-6">
          <PortfolioCard
            name={projects[5].name}
            image={projects[5].image}
            location={projects[5].location}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
