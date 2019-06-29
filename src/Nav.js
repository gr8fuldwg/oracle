import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Navbar } from 'reactstrap';

function Nav() {

    const navStyle = {
        color: 'white'
    }

  return (
    <Navbar>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/Oracle">
          <li>Oracle</li>
        </Link>
        <Link style={navStyle} to="/Thing">
          <li>Thing</li>
        </Link>
      </ul>
    </Navbar>
  );
}

export default Nav;
