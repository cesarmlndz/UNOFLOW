import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="navbar-logo">
          uno<span className="flow-word">flow</span>
        </h2>
      </Link>
    </nav>
  );
}
