import React from "react";
import NavTabs from "../Tabs/NavTabs";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">

      <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
      <h1 className="title-logo">Kay Davis </h1>
        </Link>

      <NavTabs />
    </header>
  );
}

export default Header;
