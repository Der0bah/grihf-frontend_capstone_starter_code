import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="brand">StayHealthy</div>
      <nav className="menu">
        <a href="/index.html">Home</a>
        <a href="/signup.html" className="btn">Sign Up</a>
        <a href="/login.html" className="btn btn--outline">Login</a>
      </nav>
    </div>
  );
}
