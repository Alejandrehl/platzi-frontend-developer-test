import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <p className="footer-text">
      Created by{" "}
      <a
        href="https://alejandrehl.github.io/me/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alejandro Exequiel Hernández Lara
      </a>
      {" - "}
      <a
        href="https://github.com/Alejandrehl/platzi-frontend-developer-test"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repository
      </a>
    </p>
  );
};

export default Footer;
