import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar">
      <a href="https://github.com/fdrennan/stocks" target="_blank">
        <h1 className="navbar-link">App REPO</h1>
      </a>
      <a href="https://github.com/fdrennan/stockAPI" target="_blank">
        <h1 className="navbar-link">R REPO</h1>
      </a>
      <h1>{props.navTitle}</h1>
    </nav>
  );
};

export default Navbar;
