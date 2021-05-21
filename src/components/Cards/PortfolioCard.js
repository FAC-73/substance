import React from "react";

function PortfolioCard(props) {
  return (
    <div className="portfolio-card">
      <img className="img-card" alt={props.name} src={props.image} />

      <p className="project-label">{props.name}</p>
      <a
        className="project-link"
        href={props.location}
        target="_blank"
      >
        {props.location}
      </a>
    </div>
  );
}

export default PortfolioCard;
