import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar">
      {/*<Link to="/">*/}
      {/*  <h1 className="navbar-link">Home</h1>*/}
      {/*</Link>*/}
      <a href="https://github.com/fdrennan/stocks" target="_blank">
        {/*<i className={"fab fa-github"}> </i>*/}
        <h1 className="navbar-link">App REPO</h1>
      </a>
      <a href="https://github.com/fdrennan/stockAPI" target="_blank">
        {/*<i className={"fab fa-github"}> </i>*/}
        <h1 className="navbar-link">R REPO</h1>
      </a>
      <h1>{props.navTitle}</h1>
    </nav>
  );
};

export default Navbar;
