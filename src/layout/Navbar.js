import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar-link">Home</h1>
      </Link>
      <Link to="/image">
        <h1 className="navbar-link">Images</h1>
      </Link>
      <h1>
        <i className={"fab fa-github"}> </i> {props.navTitle}
      </h1>
    </nav>
  );
};

export default Navbar;
