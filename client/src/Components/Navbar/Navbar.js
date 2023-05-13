import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "../../index.css";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <span>D</span>ASH <span>B</span>OARD
      </Link>
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/">List</Link>
        </li>
      </ul>
      <Link to="/" className="logo">
        <span>J</span>OB <span>R</span>ESULTS
      </Link>
    </div>
  );
};

export default Navbar;
