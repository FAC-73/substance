import React from "react";
import { Link } from "react-router-dom";


function NavTabs() {
  return (
    <div className="container-nav">
      <ul className="nav nav-tabs">

        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
