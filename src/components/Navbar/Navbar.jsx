import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <div>
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
    </div>
  ) : (
    <div>
      <Link to="/" className="NavBar-link">
        Home
      </Link>
      <Link to="/blog" className="NavBar-link">
        Blog
      </Link>
      <Link to="/destination" className="NavBar-link">
        Destination
      </Link>
      <Link to="/incidence" className="NavBar-link">
        Incidence
      </Link>
      <Link to="/about" className="NavBar-link">
        About
      </Link>
      <Link to="/contact" className="NavBar-link">
        Contact Us
      </Link>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  let nav2 = (
    <div className="NavBar-nav2">
      <Link to="/" className="NavBar-link">
        Home
      </Link>
      <Link to="/blog" className="NavBar-link">
        Blog
      </Link>
      <Link to="/destination" className="NavBar-link">
        Destination
      </Link>
      <Link to="/incidence" className="NavBar-link">
        Incidence
      </Link>
      <Link to="/about" className="NavBar-link">
        About
      </Link>
      <Link to="/contact" className="NavBar-link">
        Contact Us
      </Link>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  const banner = <div className="NavBar-banner"> djkdfk </div>;
  return (
    <div className="NavBar">
      {nav}
      {banner}
      {nav2}
    </div>
  );
};

export default NavBar;
