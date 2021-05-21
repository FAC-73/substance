import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <a
        className="footer-link"
        href="mailto:kaydavis21@googlemail.com"
        target="_blank"
      >
        2021 Kay Davis
      </a>
      <div>
        <a
          className="footer-link-icon"
          href="https://www.linkedin.com/in/kayleighdavis/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          className="footer-link-icon"
          href="https://github.com/FAC-73"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          className="footer-link-icon"
          href="mailto:kaydavis21@googlemail.com"
          target="_blank"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
